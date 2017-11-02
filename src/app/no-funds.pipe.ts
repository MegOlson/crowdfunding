import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'noFunds',
  pure: false
})
export class NoFundsPipe implements PipeTransform {

  transform(input: Project[]){
    var output: Project[] = [];
    for(let i = 0; i < input.length; i++) {
      if(input[i].fundsRaised <= 0) {
        output.push(input[i])
      }
    }
    return output;
  }

}
