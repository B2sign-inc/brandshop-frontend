import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';



@Injectable()
export class AuthService {

  private _isLoggedIn = false;

  redirectUrl: string;

  constructor() { }

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => {
      // TODO
    });
  }

  logout(): void {
    // TODO logout
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
