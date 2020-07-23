import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { Item } from '../../models/item/item.model';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemModalComponent } from '../item-modal/item-modal.component';

@Component({
  selector: 'app-quick-list',
  templateUrl: './quick-list.component.html',
  styleUrls: ['./quick-list.component.scss'],
})
export class QuickListComponent implements OnInit {
  items: Item[];
  quantity: number;
  modalOpen = false;

  constructor(private itemService: ItemService, private modalService: NgbModal) {}

  ngOnInit(): void {
    const quantity = 8;
    this.itemService.getLatest(quantity).subscribe((res) => {
      this.items = res;
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

  openModalDetails(item: Item) {
    const modalRef = this.modalService.open(ItemModalComponent);
    modalRef.componentInstance.item = item;
  }

  returnDate(date) {
    const d = new Date(date.seconds * 1000);
    return moment().to(d);
  }
}
