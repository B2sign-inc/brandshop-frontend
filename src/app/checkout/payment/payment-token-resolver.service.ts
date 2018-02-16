import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { PaymentService } from '../../shared';

@Injectable()
export class PaymentTokenResolver implements Resolve<string> {
  constructor(private paymentService: PaymentService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return this.paymentService.getToken().take(1);
  }
}
