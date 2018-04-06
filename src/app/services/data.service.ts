import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  params = { "$query": { "$and": [{ "categoryUri": { "$and": ["dmoz/Society/Politics"] } }, { "$or": [{ "sourceUri": "bloomberg.com" }, { "sourceUri": "washingtonpost.com" }] }] }, "$filter": {} };
  url = `http://eventregistry.org/json/article?query=${JSON.stringify(this.params)}&action=getArticles&resultType=articles&articlesSortBy=date&articlesCount=10&articlesArticleBodyLen=-1&apiKey=e7b30769-23df-462b-8ee1-440aa0784c21`;



  getData() {
    this.params.$query.$and[1].$or.push({"sourceUri": "bloomberg"});
    console.log(this.params.$query.$and[1].$or);
    this.http.get(this.url).subscribe(res => {
      console.log(res);
    });
  }
}
