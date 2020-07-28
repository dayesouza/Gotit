import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../models/item.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-quickly',
  templateUrl: './add-quickly.component.html',
  styleUrls: ['./add-quickly.component.scss'],
})
export class AddQuicklyComponent implements OnInit {
  resourceForm: FormGroup;
  items: Item[];

  constructor(
    protected itemService: ItemService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.buildResourceForm();
  }

  submit() {
    if (!this.resourceForm.valid) {
      this.resourceForm.markAsDirty();
      return;
    }

    const value = this.resourceForm.value;
    this.itemService
      .persistDocument(value)
      .then((_) => {
        this.toastr.success('Saved with success!');
        this.resourceForm.reset();
      })
      .catch((_) => {
        this.toastr.error('We have an error. Please try again.');
      });
  }

  private buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
    });
  }
}
