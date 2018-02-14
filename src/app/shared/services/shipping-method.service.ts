import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { ShippingMethod } from '../models/shipping-method.model';

@Injectable()
export class ShippingMethodService {

  constructor(private apiSerivce: ApiService) { }

  all(): Observable<ShippingMethod> {
    return this.apiSerivce.get('shippingMethod/all');
  }
}
