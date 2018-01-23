import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  private token: string;

  message: string= 'Verifing...';

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userService.verify(this.getToken()).subscribe(data => {
      this.message = data['message']
    }, error => {
      if (error && error.error && error.error.message) {
        this.message = error.error.message;
      }
    });
  }

  getToken() {
    if (!this.token) {
      this.token = this.activatedRoute.snapshot.paramMap.get('token');
    }
    return this.token
  }




}
