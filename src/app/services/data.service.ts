import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
  this.http.get(`https://newsapi.org/v2/top-headlines?q=trump&apiKey=2ed22f667ed4478ea5b9c52d36e92e4a`).subscribe(res => {
    console.log(res)
  });

}
