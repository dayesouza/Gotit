import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/security/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  loginWithGoogle() {
    this.authService.signInWithGoogle();
  }

  loginWithFacebook() {
    this.authService.signInWithFacebook();
  }
}
