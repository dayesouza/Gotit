import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { Item } from '../../models/item/item.model';
import * as moment from 'moment';

@Component({
  selector: 'app-quick-list',
  templateUrl: './quick-list.component.html',
  styleUrls: ['./quick-list.component.scss'],
})
export class QuickListComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getAll().subscribe((res) => {
      this.items = this.sort(res);
    });
  }

  sort(res) {
    return res.sort((a, b) => {
      if (b.createdDate < a.createdDate) {
        return -1;
      }
      if (b.createdDate > a.createdDate) {
        return 1;
      }
      return 0;
    });
  }

  returnDate(date) {
    const d = new Date(date.seconds * 1000);
    return moment().to(d);
  }
}
