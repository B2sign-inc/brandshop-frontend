import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Order, OrderService } from '../../shared';

@Injectable()
export class PaymentOrderResolver implements Resolve<Order> {
  constructor(private orderService: OrderService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {
    let id = route.paramMap.get('orderId');

    return this.orderService.get(id).map(data => {
      return data['data'];
    }).take(1);
  }
}
