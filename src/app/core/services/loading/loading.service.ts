import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  loading = false;
  constructor() {}

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }
}
