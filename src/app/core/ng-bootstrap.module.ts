import { NgModule } from '@angular/core';
import {
  NgbModalModule,
  NgbAlertModule,
  NgbDropdownModule,
  NgbCollapseModule,
} from '@ng-bootstrap/ng-bootstrap';

const values = [
  NgbModalModule,
  NgbAlertModule,
  NgbDropdownModule,
  NgbCollapseModule,
];

@NgModule({
  imports: values,
  exports: values,
  declarations: [],
  providers: [],
})
export class NgBootstrapModule {}
