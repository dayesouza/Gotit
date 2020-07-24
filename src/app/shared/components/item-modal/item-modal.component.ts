import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../models/item/item.model';
import { ItemService } from '../../services/item/item.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss'],
})
export class ItemModalComponent implements OnInit {
  @Input() item: Item;
  closeResult = '';
  editing = false;
  editItem: Item;
  resourceForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private itemService: ItemService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildResourceForm();
  }

  returnLink() {
    if (!this.item.link?.startsWith('http')) {
      return `//${this.item.link}`;
    }
    return this.item.link;
  }

  private buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [this.item.id],
      name: [this.item.name, [Validators.required, Validators.minLength(2)]],
      price: [this.item.price],
      link: [this.item.link],
    });
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  submit() {
    if (!this.resourceForm.valid) {
      this.resourceForm.markAsDirty();
      return;
    }

    const newItem = { ...this.item, ...this.resourceForm.value };
    this.save(newItem);
  }

  save(item = this.item) {
    this.itemService.persistDocument(item).then((s) => {
      this.toastr.success('Saved with success!');
      this.activeModal.close();
    });
  }

  delete() {
    const confirmDelete = confirm(
      `Delete ${this.item.name}? This action can't be undone`
    );
    if (!confirmDelete) {
      return;
    }

    this.itemService.delete(this.item.id).then((s) => {
      this.toastr.success('Deleted with success!');
      this.activeModal.close();
    });
  }

  bought() {
    if (this.item.boughtDate) {
      this.item.boughtDate = null;
    } else {
      this.item.boughtDate = new Date();
    }
    this.save();
  }
}
