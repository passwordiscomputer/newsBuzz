import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  sendstoriesRequests(urlArray){
    let getRequestArray = [];
    for (let url of urlArray){
      getRequestArray.push(this.http.get(url));
    }
    return forkJoin(getRequestArray);
  }

  sourceRequest(){
    return this.http.get("https://newsapi.org/v2/sources?language=en&apiKey=2ed22f667ed4478ea5b9c52d36e92e4a");
  }



}
