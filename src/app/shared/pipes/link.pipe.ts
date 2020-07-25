import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'link',
})
export class LinkPipe implements PipeTransform {
  transform(value: any): any {
    if (!value?.startsWith('http')) {
      return `//${value}`;
    }
    return value;
  }
}
