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

  stories : Story[] = [new Story("I am a big dum dum", "www.math.com", "chase.com", "This is a story of a big dum dum who ran out of all his api calls and couldnt make his story work"), new Story("I am smart", "www.math.com", "chase.com", "This is a story of a big dum dum who ran out of all his api calls and couldnt make his story work")];
  currentStoryNumber = 0;
  constructor(private queryService: QueryService, private storyService: StoryService) { }

  ngOnInit() {
    console.log(this.childQueryData);
    // let query = new Query(this.childQueryData.sourceUris, this.childQueryData.categories, this.childQueryData.keywords);
    // this.storyService.getStories(this.queryService.makeUrlArray(query)).subscribe(results =>{
    //   let i = 0;
    //   while (this.stories.length < 10) {
    //     for (let result of results){
    //       this.stories.push(new Story(result.articles.results[i].title));
    //     }
    //     i++;
    //   }
    //
    // });
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
