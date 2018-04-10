import { Pipe, PipeTransform } from '@angular/core';
import { Source } from './models/source.model'

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Source[], desiredCategory) {
    if (desiredCategory == "all") {
      return input;
    }
    var output: Source[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].categories.includes(desiredCategory)) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
