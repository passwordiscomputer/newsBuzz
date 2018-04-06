import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  keywords = ["Donald Trump"];
  categories = ["dmoz/Society/Politics"]
  sources = [{"sourceUri":"wsj.com"},{"sourceUri":"washingtonpost.com"}]
  params = {"$query":{"$and":[{"keyword":{"$and":this.keywords}},{"categoryUri":{"$and":this.categories}},{"$or":this.sources},{"lang":"eng"}]},"$filter":{}};
  url = `http://eventregistry.org/json/article?query=${JSON.stringify(this.params)}&action=getArticles&resultType=articles&articlesSortBy=date&articlesCount=10&articlesArticleBodyLen=-1&apiKey=e7b30769-23df-462b-8ee1-440aa0784c21`;



  getData() {

    this.http.get(this.url).subscribe(res => {
      console.log(res);
    });
  }
}
