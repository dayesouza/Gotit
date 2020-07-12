import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-quickly',
  templateUrl: './add-quickly.component.html',
  styleUrls: ['./add-quickly.component.scss'],
})
export class AddQuicklyComponent implements OnInit {
  resourceForm: FormGroup;

  constructor(
    protected itemService: ItemService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildResourceForm();
  }

  submit() {
    console.log(this.resourceForm.value);
  }

  private buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
    });
  }
}
