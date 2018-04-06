import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  url = "http://eventregistry.org/json/article";

  params = {
    "query": {
      "$query": {
        "$and": [{
          "keyword": {
            "$and": [
              "Politics",
              "Mad"
            ]
          }
        },
        {
          "categoryUri": {
            "$and": [
              "dmoz/Arts/Entertainment"
            ]
          }
        }
        ]
      },
      "$filter": {}
    },
    "action": "getArticles",
    "resultType": "articles",
    "articlesSortBy": "date",
    "articlesCount": 100,
    "articlesArticleBodyLen": -1
  }

  getData() {
    this.http.get(this.url).subscribe(res => {
      console.log(JSON.stringify(this.params));
    });
  }
}
