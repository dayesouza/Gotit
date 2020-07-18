import { Injectable } from '@angular/core';
import { routes } from '../core/routes';
import { menus } from '../core/menus';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  availableRoutes: any[];
  menus: any[];

  get getRoutes() {
    return this.availableRoutes;
  }

  get getMenus() {
    return this.menus;
  }

  setRoutesIsLogged() {
    this.menus = menus.filter((x) => x.shouldBeLogged);
    this.availableRoutes = routes.filter((x) => x.name !== 'Login');
  }

  setRoutesItAnonymous() {
    this.menus = menus.filter((x) => !x.shouldBeLogged);
    this.availableRoutes = routes.filter((x) => x.name !== 'User');
  }
}
