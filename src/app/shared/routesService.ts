import { Injectable } from '@angular/core';
import { routes } from '../core/routes';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  availableRoutes: any[];

  get getRoutes() {
    return this.availableRoutes;
  }

  setRoutesIsLogged() {
    this.availableRoutes = routes.filter((x) => x.name !== 'Login');
  }

  setRoutesItAnonymous() {
    this.availableRoutes = routes.filter((x) => x.name !== 'User');
  }
}
