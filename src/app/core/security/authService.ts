import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userDetails: firebase.User = null;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user'));
      } else {
        this.userDetails = null;
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
      console.log('user', this.userDetails);
    });
  }

  returnUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }

  logout() {
    this.afAuth.signOut().then((res) => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    });
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider).then((l) =>
      this.router.navigate(['user'])
    );
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider);
  }
}
