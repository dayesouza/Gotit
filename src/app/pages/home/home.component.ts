import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/security/authService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showForm = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.showForm = this.authService.isLoggedIn();
  }
}
