import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'firebaseDate',
})
export class FirebaseDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const d = new Date(value.seconds * 1000);
    return moment(d).format();
  }
}
