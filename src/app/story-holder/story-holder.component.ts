import { Component, OnInit, Input} from '@angular/core';
import { Query } from '../models/query.model';
import { Story } from '../models/story.model'
import { QueryService } from '../services/query.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-story-holder',
  templateUrl: './story-holder.component.html',
  styleUrls: ['./story-holder.component.css'],
  providers: [ QueryService, DataService ]
})
export class StoryHolderComponent implements OnInit {
  @Input() childQueryData: Object;
  query: Query;
  stories : Story[];
  constructor(private queryService: QueryService, private dataService: DataService) { }




  ngOnInit() {
    this.query = new Query(this.childQueryData.sourceUris, this.childQueryData.categories, this.childQueryData.keywords);
    
  }

}
