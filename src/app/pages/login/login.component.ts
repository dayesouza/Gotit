import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../security/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signInWithGoogleA() {
    this.authService.signInWithGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
