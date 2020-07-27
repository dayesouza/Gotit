import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RoutesService } from '../../../shared/routesService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuName = 'Gotit';
  isMenuCollapsed = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public routeService: RoutesService
  ) {}
}
