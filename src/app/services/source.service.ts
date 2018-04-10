import { Injectable } from '@angular/core';
import { Source } from '../models/source.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DataService } from './data.service'

@Injectable()
export class SourceService {
  sources: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, private dataService: DataService) {
    this.sources = database.list('sources');
  }

  getSources(){

    return this.sources;
  }
  //function to make sour urls into objects for api parameters

  // makeSources() {
  //   this.dataService.sourceRequest().subscribe(results =>{
  //     let sourceList = {};
  //     for( let source of results.sources){
  //       if (source.url.includes("www")) {
  //         this.sources.push(new Source(source.name, source.url.substring(source.url.indexOf(".") + 1), [source.category]));
  //         // console.log(source.name);
  //         // console.log(source.url.substring(source.url.indexOf(".") + 1));
  //       } else{
  //         this.sources.push(new Source(source.name, source.url.substring(source.url.indexOf("/") + 2), [source.category]));
  //         // source.url.substring(source.url.indexOf("/") + 2));
  //       }
  //     };
  //   })
  // }

}
