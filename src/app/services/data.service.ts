import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }




  getData(url) {
    this.http.get().subscribe(res => {
      console.log(res);
    });
  }
}
