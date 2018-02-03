import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

import { User } from '../models';

@Injectable()
export class UserService {

  constructor(private apiServie: ApiService) { }

  verify(token: string): Observable<any> {
    return this.apiServie.get('user/verify/' + token);
  }

  update(user): Observable<User> {
    return this.apiServie.put('user', user);
  }

  updateAddress(data: {type: string, id: string}): Observable<any> {
    return this.apiServie.put('user/address/' + data.id, data);
  }
}
