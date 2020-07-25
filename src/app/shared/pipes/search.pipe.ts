import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(
      (x) =>
        this.filter(x.name, searchText) ||
        this.filter(x.price, searchText) ||
        this.filter(x.link, searchText)
    );
  }

  filter(value, text) {
    return value != null && value != undefined
      ? value.toString().toLowerCase().includes(text)
      : false;
  }
}
