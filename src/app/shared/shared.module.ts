import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { FormsModule } from '@angular/forms';
import { QuickListComponent } from './components/quick-list/quick-list.component';

@NgModule({
  declarations: [
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    QuickListComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // shared components
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    QuickListComponent,
    FormsModule,
  ],
})
export class SharedModule {}
