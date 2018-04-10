import { Component, OnInit, Input } from '@angular/core';
//models
import { Source } from '../models/source.model';
import { Query } from '../models/query.model';
import { Category } from '../models/category.model';
//services
import { SourceService } from '../services/source.service';
import { QueryService } from '../services/query.service';
import { DataService } from '../services/data.service';

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
  filterByCategory: string[]= ["all"];
  constructor(private sourceService: SourceService, private queryService: QueryService, private dataService: DataService) { }

  categories =
    [new Category("business", "dmoz/Business"), new Category("technology","dmoz/Science/Technology"), new Category("politics","dmoz/Society/Politics"), new Category("entertainment","dmoz/Arts/Entertainment"), new Category("sports", "dmoz/Sports")];
  // categoriesKeyPairs = { "business":"dmoz/Business", "technology":"dmoz/Science/Technology", "politics":"dmoz/Society/Politics", "entertainment":"dmoz/Arts/Entertainment"}

  categoryQueryArray: string[] = [];
  ngOnInit() {

    this.sourceService.getSources().subscribe(dataLastEmittedFromObserver => {
      for (let source of dataLastEmittedFromObserver) {
        this.sources.push(new Source(source.name, source.url, source.categories))
      }
    })
  }
  //add sources to list to make query for api request
  onCheck(array, input, isChecked: boolean) {
    if (isChecked) {
      array.push(input);
    } else {
      for (var i = 0; i < array.length; i++) {
        if (array[i] == input) {
          array.splice(i, 1);
        }
      }
    }
    console.log(array);
  }
  //change category
  onCategoryChange(optionFromMenu) {
  //option from menu is category array index 0 is category name
    this.filterByCategory = optionFromMenu;
    this.sourceUris = []
  }

  //submit form to make a new query object and send it to fb
  submitQuery(){
    let newQuery: Query = new Query(this.sourceUris, this.categoryQueryArray, this.keywords);

    this.queryService.addQuery(newQuery);
  }

  //keyword Input
  addKeyword(newKeyword){
    this.keywords.push(newKeyword);
  }
}
