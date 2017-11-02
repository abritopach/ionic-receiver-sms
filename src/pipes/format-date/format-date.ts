import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

/**
 * Generated class for the FormatDatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    //return value.toLowerCase();
    console.log(value);
    let formatDate = '';
    let today = moment();

    if(moment(value).isSame(today, 'day')) formatDate = moment(value).format("HH:mm")
    else formatDate = moment(value).format("DD MMM");

    return formatDate;
  }
}
