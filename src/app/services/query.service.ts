import { Injectable } from '@angular/core';
import { Query } from '../models/query.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class QueryService {
  queries: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.queries = database.list('queries');
  }

  getSources(){
    return this.queries;
  }

  addQuery(newQuery: Query){
    this.queries.push(newQuery);
  }

}
