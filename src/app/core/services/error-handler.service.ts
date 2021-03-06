import { Injectable, ErrorHandler } from '@angular/core';
import { MyMonitoringService } from './logging.service';

@Injectable()
export class ErrorHandlerService extends ErrorHandler {
  constructor(private loggingService: MyMonitoringService) {
    super();
  }

  handleError(error: Error) {
    console.log('insight', error);
    this.loggingService.logException(error); // Manually log exception
  }
}
