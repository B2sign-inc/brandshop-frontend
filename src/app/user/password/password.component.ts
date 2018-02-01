import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { PasswordValidator } from '../../auth/register/password-validator.directive';
import { AuthService, User } from '../../shared/';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  user: User;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  userPasswordForm: FormGroup;

  createForm(): void {
    this.userPasswordForm = this.fb.group({
      old_password: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', [Validators.required, PasswordValidator.match('password')]],
    });
  }

  onSubmit(): void {
    const data = this.userPasswordForm.value;

    console.log(data);
  }
}
