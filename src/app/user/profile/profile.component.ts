import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserService, User } from '../../shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user: User;

  private userSubscriber;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userSubscriber = this.authService.currentUser().subscribe(user => {
      this.user = user;
      this.createForm();
    });
  }

  ngOnDestroy() {
    this.userSubscriber.unsubscribe();
  }

  profileForm: FormGroup;

  createForm(): void {
    this.profileForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.min(3)]],
      lastname: ['', [Validators.required, Validators.min(3)]],
      email: [{value:'', disabled: true}],
    });

    if (this.user.firstname) {
      this.profileForm.setValue({
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
      });
    }
  }

  onSubmit(): void {
    const data = this.profileForm.value;

    this.userService.update(data).subscribe(
      data => {
        this.authService.populate();
        this.router.navigate(['user']);
      },
      error => {

      }
    );
  }
}
