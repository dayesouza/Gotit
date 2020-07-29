import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { RoutesService } from '../../shared/routesService';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userDetails: firebase.User = null;
  error: string;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    protected routesService: RoutesService
  ) {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userDetails = user;
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user'));
        routesService.setRoutesIsLogged();
      } else {
        routesService.setRoutesItAnonymous();
        this.userDetails = null;
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  updateProfile(displayName: string) {
    return this.userDetails.updateProfile({ displayName });
  }

  returnUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  loggedState() {}

  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }

  logout() {
    this.afAuth.signOut().then((res) => {
      localStorage.removeItem('user');
      this.router.navigate(['landing']);
    });
  }

  signInWithGoogle() {
    this.error = null;
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider).then((_) =>
      this.router.navigate(['home'])
    );
  }

  signInWithFacebook() {
    this.error = null;
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider).then((_) =>
      this.router.navigate(['home'])
    );
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider).catch((err) => {
      this.error = err.message;
    });
  }
}
