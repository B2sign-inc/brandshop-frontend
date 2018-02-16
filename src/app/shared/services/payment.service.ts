import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaymentService {

  constructor(private apiService: ApiService) { }

  getToken(): Observable<string> {
    return this.apiService.get('payments/token').map(data => {
      return data['token'];
    });
  }

  paid(orderId: number, nonce: string): Observable<any> {
    return this.apiService.post(`payments/${orderId}/paid`, {payment_method_nonce: nonce})
  }
}
