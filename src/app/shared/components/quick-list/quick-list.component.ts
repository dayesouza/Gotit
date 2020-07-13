import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { Item } from '../../models/item/item.model';

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
      console.log('res', res);
      this.items = res;
    });
  }
}
