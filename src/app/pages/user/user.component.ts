import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/security/authService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user;
  constructor(private authService: AuthService) {
    this.user = this.authService.returnUser();
  }

  ngOnInit(): void {}
}
