import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { FormsModule } from '@angular/forms';
import { QuickListComponent } from './components/quick-list/quick-list.component';
import { ItemModalComponent } from './components/item-modal/item-modal.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FirebaseDatePipe } from './pipes/firebase-date.pipe';
import { LinkPipe } from './pipes/link.pipe';
import { FilterPipe } from './pipes/search.pipe';
import { CuttlyService } from './services/cuttly/cuttly.service';
import { ItemService } from './services/item/item.service';

@NgModule({
  declarations: [
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    QuickListComponent,
    ItemModalComponent,
    ListItemComponent,
    FirebaseDatePipe,
    LinkPipe,
    FilterPipe,
  ],
  providers: [CuttlyService, ItemService],
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
    ListItemComponent,
    // shared pipes
    FirebaseDatePipe,
    LinkPipe,
    FilterPipe,
    // shared services
  ],
})
export class SharedModule {}
