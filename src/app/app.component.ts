import { Router } from '@angular/router';
import { Component, Renderer2, ElementRef } from '@angular/core';
import { LoadingService } from './core/services/loading/loading.service';
import { AppUpdateService } from './shared/services/app-update/app-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gotit';
  showFooter = true;
  showHeader = true;

  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2,
    public loadingService: LoadingService,
    private appUpdateService: AppUpdateService
  ) {
    router.events.subscribe((val) => {
      this.hideHeaderOrFooter();
      if (location.pathname === '/landing') {
        this.renderer.setAttribute(
          this.el.nativeElement.ownerDocument.body,
          'class',
          'landing'
        );
      } else {
        this.renderer.removeAttribute(
          this.el.nativeElement.ownerDocument.body,
          'class'
        );
      }
    });
  }

  hideHeaderOrFooter() {
    this.showHeader =
      location.pathname !== '/landing' && location.pathname !== '/login';
    this.showFooter = location.pathname !== '/landing';
  }
}
