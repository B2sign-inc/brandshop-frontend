import { Injectable } from '@angular/core';
import { Address } from './../models/address.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Order } from '../models/order.model';

@Injectable()
export class OrderService {

  constructor(private apiService: ApiService) { }

  placeOrder(params: {
    shipping: Address,
    use_different_billing_address: boolean,
    billing: Address,
    shipping_method_id: number,
  }): Observable<any> {
    return this.apiService.post('orders/place', params);
  }

  get(id): Observable<Order> {
    return this.apiService.get(`orders/${id}`);
  }
}
