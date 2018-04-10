import { Component, OnInit, Input} from '@angular/core';
//models
import { Query } from '../models/query.model';
import { Story } from '../models/story.model';

//services
import { QueryService } from '../services/query.service';
import { StoryService }  from '../services/story.service';
import { DataService }  from '../services/data.service';

@Component({
  selector: 'app-story-holder',
  templateUrl: './story-holder.component.html',
  styleUrls: ['./story-holder.component.css'],
  providers: [ QueryService, StoryService, DataService ]
})
export class StoryHolderComponent implements OnInit {
  //starting variables
  @Input() childQueryData;

  stories : Story[] = [];
  constructor(private queryService: QueryService, private storyService: StoryService) { }

  ngOnInit() {
    let query = new Query(this.childQueryData.sourceUris, this.childQueryData.categories, this.childQueryData.keywords);
    this.storyService.getStories(this.queryService.makeUrlArray(query)).subscribe(results =>{
      let i = 0;
      while (this.stories.length < 10) {
        for (let result of results){
          this.stories.push(new Story(result.articles.results[i].title));
        }
        i++;
      }
      
    });
  }

}
