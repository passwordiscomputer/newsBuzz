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
  sources;
  constructor(private sourceService: SourceService) { }

  categories =
  ["Business", "Tech", "Politics"];

  ngOnInit() {
    this.sourceService.getSources().subscribe(dataLastEmittedFromObserver => {
      this.sources = dataLastEmittedFromObserver;

      console.log(this.sources);
    })
  }

}
