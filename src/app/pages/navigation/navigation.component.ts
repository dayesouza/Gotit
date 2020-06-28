import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  menuName = 'Gotit';

  menuItems: any[] = [
    { link: '/home', name: 'Home' },
    { link: '/user', name: 'User' },
    { link: '/login', name: 'Login' },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}
}
