import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../models/item/item.model';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss'],
})
export class ItemModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
  closeResult = '';
  @Input() item: Item;

  

}
