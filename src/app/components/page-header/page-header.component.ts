import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { routes } from '../../core/routes';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  name: string;
  show = false;

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const actualRoute = routes.find((r) => r.link === this.router.url);
        this.name = actualRoute.name;
        this.show = actualRoute.showHeader;
      }
    });
  }
}
