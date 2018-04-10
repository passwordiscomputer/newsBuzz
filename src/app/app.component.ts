import { Component, OnInit } from '@angular/core';
import { Source } from './models/source.model';
import { Category } from './models/category.model';

import { SourceService } from './services/source.service';
import { QueryService } from './services/query.service';
import { DataService } from './services/data.service';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QueryService]
})
export class AppComponent {
  queries = <any>[];
  addNewArticleClicked = false;
  buttonText = "Add news components"
  constructor(private queryService: QueryService){
  }

  ngOnInit() {
    this.queryService.getQueries().subscribe(dataLastEmittedFromObserver => {
      this.queries = dataLastEmittedFromObserver;
    })

  }

  addButtonClicked(){
    this.addNewArticleClicked = !this.addNewArticleClicked;
    this.buttonText = this.addNewArticleClicked ?  "Done adding" : "Add news components";
  }

  


}
