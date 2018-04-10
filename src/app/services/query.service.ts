import { Injectable } from '@angular/core';
import { Query } from '../models/query.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class QueryService {
  queries: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.queries = database.list('queries');
  }

  getQueries() {
    return this.queries;
  }

  addQuery(newQuery: Query) {
    this.queries.push(newQuery);
  }

  //methods to convery queries to api requests
  makeUrlArray(query: Query) {
    let apiUrlArray = [];
    for (let category of query.categories) {
      apiUrlArray.push(this.makeUrl( query.sourceUris, "categoryUri", category));
    }
    for (let keyword of query.keywords) {
      console.log(keyword);
      apiUrlArray.push(this.makeUrl(query.sourceUris, "keyword", keyword));
    }
    return apiUrlArray;
  }

  makeUrl(sourceUris, filterType, filterTerm) {
    let params = { "$query": { "$and": [{ [filterType]: { "$and": [filterTerm] } }, { "$or": sourceUris }, { "lang": "eng" }] }, "$filter": {} };
    let url = `http://eventregistry.org/json/article?query=${JSON.stringify(params)}&action=getArticles&resultType=articles&articlesSortBy=date&articlesCount=10&articlesPage=0&articlesArticleBodyLen=-1&apiKey=3ac20ecd-011b-45ef-8b6e-9a86408af0ec`;
    console.log(url);
    return url;
  }

  deleteQuery(key){
    var queryInFirebase = this.queryById(key);
    queryInFirebase.remove();
  }

  queryById(queryId: string) {
    return this.database.object('queries/' + queryId);
  }
}
