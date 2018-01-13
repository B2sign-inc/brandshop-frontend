import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './password-validator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', [Validators.required, PasswordValidator.match('password')]]
    });
  }

  onSubmit(): void {

  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
}
