import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkStr',
})
export class LinkStrPipe implements PipeTransform {
  transform(value: string): any {
    if (!value) {
      return value;
    }

    if (value.startsWith('http')) {
      const slash = value.split('://');
      value = slash[1];
    }

    if (value.startsWith('www')) {
      const www = value.split('www.');
      value = www[1];
    }

    const siteName = value.split('.');
    return siteName[0];
  }
}
