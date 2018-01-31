import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { EmailMessage } from '../models';

@Injectable()
export class EmailMessageService {

  constructor(
    private apiService: ApiService
  ) { }

  query(page): Observable<any> {
    return this.apiService.get('/emailMessages', page).map(data => data);
  }

  get(id): Observable<EmailMessage> {
    return this.apiService.get('/emailMessages/' + id);
  }
}
