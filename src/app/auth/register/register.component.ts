import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './password-validator.directive';
import { Router } from '@angular/router';
import { AuthService, MessageService } from '../../shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.createForm();
  }

  createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', [Validators.required, PasswordValidator.match('password')]]
    });
  }

  onSubmit(): void {
    this.authService.register(this.authForm.value).subscribe(data => {
      const message = data['message'];
      this.messageService.message(message);
    }, error => {
      const errors = error.error ? error.error.errors : null;
      if (errors) {
        for (let field in errors) {
          this.authForm.get(field).setErrors({custom: errors[field].join(' ')})
        }
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
}
