import { Injectable } from '@angular/core';
import { Source } from '../models/source.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SourceService {
  sources: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.sources = database.list('sources');
  }

  getSources(){
    return this.sources;
  }
  //function to make sour urls into objects for api parameters



}
