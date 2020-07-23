import { NgModule } from '@angular/core';
import { NgbModalModule, NgbAlertModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

const values = [NgbModalModule, NgbAlertModule];

@NgModule({
  imports: values,
  exports: values,
  declarations: [],
  providers: [],
})
export class NgBootstrapModule {}
