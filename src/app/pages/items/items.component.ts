import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../shared/services/item/item.service';
import { Item } from '../../shared/models/item.model';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '../../core/services/loading/loading.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  itemsBought: Item[];
  itemsToBuy: Item[];
  resourceForm: FormGroup;
  orderLabel: string = 'Date added';
  order: string = 'createdDate';
  search: string;
  addItemOpen = false;

  sortItems: any[] = [
    { field: 'name', fieldLabel: 'Name' },
    { field: 'createdDate', fieldLabel: 'Date added' },
    { field: 'price', fieldLabel: 'Price' },
  ];

  constructor(
    private itemService: ItemService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.startLoading();
    this.itemService.getAll().subscribe((items) => {
      this.loadingService.stopLoading();
      this.setItemsToBuy(items);
      this.setItemsBought(items);
    });
    this.buildResourceForm();
  }

  private buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      price: [null],
      link: [null],
    });
  }

  resetFields() {
    this.resourceForm.reset();
    this.addItemOpen = false;
  }

  add() {
    if (this.resourceForm.invalid) {
      this.resourceForm.markAsDirty();
      return;
    }
    const item = this.resourceForm.value;
    this.save(item);
  }

  setItemsToBuy(items) {
    items = items.filter(
      (x) => x.boughtDate == null || x.boughtDate == undefined
    );
    this.itemsToBuy = this.orderFn(items, this.order);
  }

  setItemsBought(items) {
    items = items.filter(
      (x) => x.boughtDate != null && x.boughtDate != undefined
    );
    this.itemsBought = this.orderFn(items, this.order);
  }

  changeOrder(field: string, fieldLabel: string): void {
    this.order = field;
    this.orderLabel = fieldLabel;
    this.itemsToBuy = this.orderFn(this.itemsToBuy, field);
    this.itemsBought = this.orderFn(this.itemsToBuy, field);
  }

  orderFn(res, field) {
    return res.sort((a, b) => {
      if (b[field] == null || b[field] == undefined) {
        return -1;
      }

      if (b[field] > a[field]) {
        return -1;
      }

      if (b[field] < a[field]) {
        return 1;
      }

      return 0;
    });
  }

  delete(item) {
    const confirmDelete = confirm(
      `Delete ${item.name}? This action can't be undone`
    );
    if (!confirmDelete) {
      return;
    }
    this.loadingService.startLoading();
    this.itemService.delete(item.id).then((s) => {
      this.toastr.success('Deleted with success!').onShown;
    });
    // .finally(() => this.loadingService.stopLoading());
  }

  save(item) {
    this.loadingService.startLoading();
    this.itemService.persistDocument(item).then((s) => {
      this.toastr.success('Saved with success!');
      this.resetFields();
    });
    // .finally(() => this.loadingService.stopLoading());
  }
}
