import { Component, OnInit } from '@angular/core';
import { Source } from '../models/source.model';
import { SourceService } from '../services/source.service';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-add-news-component',
  templateUrl: './add-news-component.component.html',
  styleUrls: ['./add-news-component.component.css'],
  providers: [SourceService]
})
export class AddNewsComponentComponent implements OnInit {
  sources: Source[] = [];
  sourceUrls: string[] = [];
  filterByCategory: string = "";
  constructor(private sourceService: SourceService) { }

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
  onCheck(sourceUrl, isChecked: boolean) {
    if (isChecked) {
      this.sourceUrls.push(sourceUrl);
      console.log(this.sourceUrls);
    } else {
      for (var i = 0; i < this.sourceUrls.length; i++) {
        if (this.sourceUrls[i] == sourceUrl) {
          this.sourceUrls.splice(i, 1);
        }
      }
      console.log(this.sourceUrls);
    }
  }

  onCategoryChange(optionFromMenu) {
    this.filterByCategory = optionFromMenu;
  }

}
