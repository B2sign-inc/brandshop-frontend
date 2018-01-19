import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, User } from '../../shared';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : Observable<boolean>;

  userIconColor: string = '';
  userTooltipName: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();

    this.authService.isLoggedIn().subscribe(isLoggedIn => {
      this.userIconColor = isLoggedIn ? 'primary' : '';
    });

    this.authService.currentUser().subscribe(user => {
      this.userTooltipName = user.firstname && user.lastname ?  user.firstname + ' ' + user.lastname : '';
    });
  }

  logout() {

  }
}
