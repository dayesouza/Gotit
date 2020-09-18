import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {
constructor(private readonly updates: SwUpdate) {
  this.updates.available.subscribe(event => {
    this.showAppUpdateAlert();
  });
}
showAppUpdateAlert() {
  const header = 'App Update available';
  const message = 'Choose Ok to update';
  const action = this.doAppUpdate;
  const caller = this;
  // Use MatDialog or ionicframework's AlertController or similar

  const confirmation = confirm("App update available. Confirm to update");
  if(confirmation) {
    this.doAppUpdate();
  }
}

doAppUpdate() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}