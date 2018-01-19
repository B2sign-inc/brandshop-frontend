import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, User } from '../../shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user: User;

  private userSubscriber;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSubscriber = this.authService.currentUser().subscribe(user => {
      this.user = user;
    });
  }


  ngOnDestroy() {
    this.userSubscriber.unsubscribe();
  }
}
