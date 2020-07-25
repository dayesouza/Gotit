import { NgModule } from '@angular/core';
import {
  NgbModalModule,
  NgbAlertModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';

const values = [NgbModalModule, NgbAlertModule, NgbDropdownModule];

@NgModule({
  imports: values,
  exports: values,
  declarations: [],
  providers: [],
})
export class NgBootstrapModule {}
