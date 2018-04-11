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
  results: any;
  @Input() childQueryData;
  stories : Story[] = [];
  currentStoryNumber = 0;
  constructor(private queryService: QueryService, private storyService: StoryService) { }

  ngOnInit() {
    let query = new Query(this.childQueryData.sourceUris, this.childQueryData.categories, this.childQueryData.keywords);
    this.storyService.getStories(this.queryService.makeUrlArray(query)).subscribe(results =>{
      this.results = results;
      let i = 0;
      while (this.stories.length < 10) {
        for (let result of this.results){
          this.stories.push(new Story(result.articles.results[i].title, result.articles.results[i].url, result.articles.results[i].source.title, result.articles.results[i].body));
        }
        i++;
      }

    });
  }

  nextArticle(){
    if (this.currentStoryNumber < 9) {
        this.currentStoryNumber++;
    } else {
      this.currentStoryNumber = 0;
    }
  }
  previousArticle(){
    if (this.currentStoryNumber > 0) {
        this.currentStoryNumber--;
    } else {
      this.currentStoryNumber = 9;
    }
  }
  deleteComponent(){
    this.queryService.deleteQuery(this.childQueryData.$key)
  }

}
