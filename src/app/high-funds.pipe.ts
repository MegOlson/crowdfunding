import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'highFunds',
  pure: false
})
export class HighFundsPipe implements PipeTransform {

  transform(input: Project[]){
    let output: Project[] = [];
    for(let i = 0; i < input.length; i++){
      if(input[i].fundsRaised >= 100) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
