import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/security/authService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user;
  resourceForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.user = this.authService.returnUser();
  }

  ngOnInit(): void {
    this.buildResourceForm();
  }

  private buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      displayName: [this.user.displayName, [Validators.required]],
      email: [this.user.email],
    });
  }

  submit() {
    const displayName = this.resourceForm.get('displayName').value;
    this.authService.updateProfile(displayName).then(() => {
      this.toastr.success('Profile updated!');
    });
  }

  logout() {
    this.authService.logout();
  }
}
