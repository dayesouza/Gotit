import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { FormsModule } from '@angular/forms';
import { QuickListComponent } from './components/quick-list/quick-list.component';
import { ItemModalComponent } from './components/item-modal/item-modal.component';
import { NgBootstrapModule } from './ngBootstrap.module';
import { FirebaseDatePipe } from './pipes/firebase-date.pipe';

@NgModule({
  declarations: [
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    QuickListComponent,
    ItemModalComponent,
    FirebaseDatePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgBootstrapModule,
  ],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgBootstrapModule,
    // shared components
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    QuickListComponent,
    FormsModule,
    FirebaseDatePipe,
  ],
})
export class SharedModule {}
