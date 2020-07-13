import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../models/item/item.model';

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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildResourceForm();
  }

  submit() {
    if (!this.resourceForm.valid) {
      return;
    }
    const value = this.resourceForm.value;
    this.itemService.persistDocument(value).then((ok) => {
      this.resourceForm.reset();
    });
  }

  private buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
    });
  }
}
