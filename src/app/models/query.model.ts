export class Query {
  apiUrls: String[] = [];
  constructor(public sourceUris: Object[], public categories: String[], public keywords: String[]) {
    this.makeUrlArray();
  }

  makeUrlArray() {
    for (let category of this.categories) {
      this.apiUrls.push(this.makeUrl("categoryUri", category));
    }
    for (let keyword of this.keywords){
      this.apiUrls.push(this.makeUrl("keyword", keyword));
    }

  }

  makeUrl(filterType, filterTerm){
    let params = { "$query": { "$and": [{ [filterType]: { "$and": [filterTerm] } }, { "$or": this.sourceUris }, { "lang": "eng" }] }, "$filter": {} };
    let url = `http://eventregistry.org/json/article?query=${JSON.stringify(params)}&action=getArticles&resultType=articles&articlesSortBy=date&articlesCount=10&articlesPage=0&articlesArticleBodyLen=-1&apiKey=e7b30769-23df-462b-8ee1-440aa0784c21`;
    console.log(url);
    return url;
  }

}
