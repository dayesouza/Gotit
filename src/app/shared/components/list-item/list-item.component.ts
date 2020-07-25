import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item/item.model';
import { ItemModalComponent } from '../item-modal/item-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() items: Item[];
  @Output() delete: EventEmitter<Item> = new EventEmitter();
  @Output() update: EventEmitter<Item> = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  deleteItem(item: Item): void {
    this.delete.emit(item);
  }

  toggleBought(item: Item): void {
    item.boughtDate == null || item.boughtDate == undefined
      ? (item.boughtDate = new Date())
      : (item.boughtDate = null);
    this.update.emit(item);
  }

  openModalEdit(item: Item): void {
    const modalRef = this.modalService.open(ItemModalComponent);
    modalRef.componentInstance.item = item;
    modalRef.componentInstance.editing = true;
    modalRef.componentInstance.onlyEditModal = true;
  }
}
