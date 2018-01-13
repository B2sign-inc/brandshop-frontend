import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;

  isSubmitting = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnDestroy() {
  }

  onSubmit(): void {
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
