import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionFilter'
})
export class QuestionFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(value)
    return null;
  }

}
