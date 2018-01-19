import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, User } from '../../shared';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userIconColor: string = '';

  user: User;

  userTooltipName: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn().subscribe(isLoggedIn => {
      this.userIconColor = isLoggedIn ? 'primary' : '';
    });
    this.authService.currentUser().subscribe(user => {
      this.user = user;
      this.userTooltipName = user.firstname + ' ' + user.lastname;
    });
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

  goToUser() {
    this.router.navigate(['user']);
  }

}
