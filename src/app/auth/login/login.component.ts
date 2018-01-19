import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;

  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.authForm.setValue({
      email: 'ishaobinliang@gmail.com',
      password: 'test'
    })
  }

  ngOnDestroy() {
  }

  onSubmit(): void {
    const credentials = this.authForm.value;

    this.authService.login(credentials).subscribe(data => {
      // set user data
      this.authService.populate();
      this.router.navigate([this.authService.getRedirectUrl()]);
    });
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

}
