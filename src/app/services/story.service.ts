import { Injectable } from '@angular/core';
import { DataService } from './data.service'

@Injectable()
export class StoryService {
  sample;
  constructor(private dataService: DataService) { }

  getStories(urlArray){
    return this.dataService.sendstoriesRequests(urlArray)

  }

}
