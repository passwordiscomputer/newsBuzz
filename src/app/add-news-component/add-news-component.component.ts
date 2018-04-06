import { Component, OnInit } from '@angular/core';
import { Source } from '../models/source.model';
import { Query } from '../models/query.model';
//services
import { SourceService } from '../services/source.service';
import { QueryService } from '../services/query.service';
import { DataService } from '../services/data.service'

import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-add-news-component',
  templateUrl: './add-news-component.component.html',
  styleUrls: ['./add-news-component.component.css'],
  providers: [SourceService, QueryService, DataService]
})
export class AddNewsComponentComponent implements OnInit {
  keywords: String[] = [];
  sources: Source[] = [];
  sourceUris: Object[] = [];
  filterByCategory: String = "";
  constructor(private sourceService: SourceService, private queryService: QueryService, private dataService: DataService) { }

  categories =
    ["Business", "Tech", "Politics"];

  ngOnInit() {
    this.sourceService.getSources().subscribe(dataLastEmittedFromObserver => {
      for (let source of dataLastEmittedFromObserver) {
        this.sources.push(new Source(source.name, source.url, source.description, source.categories))
      }
    })
  }
  //add sources to list to make query for api request
  onCheck(sourceUri, isChecked: boolean) {
    if (isChecked) {
      this.sourceUris.push(sourceUri);
      console.log(this.sourceUris);
    } else {
      for (var i = 0; i < this.sourceUris.length; i++) {
        if (this.sourceUris[i] == sourceUri) {
          this.sourceUris.splice(i, 1);
        }
      }
      console.log(this.sourceUris);
    }
  }
  //change category
  onCategoryChange(optionFromMenu) {
    this.filterByCategory = optionFromMenu;
    this.sourceUris = []
  }

  //submit form to make a new query object and send it to fb
  submitQuery(){
    let newQuery: Query = new Query(this.sourceUris, [this.filterByCategory], this.keywords);
    this.queryService.addQuery(newQuery);
    this.dataService.getData();
  }
}
