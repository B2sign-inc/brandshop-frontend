import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { CartService, Cart } from '../../shared';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartResolver implements Resolve<boolean> {

  constructor(private cartService: CartService) { }

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // wait for loading cart
    return this.cartService.isLoaded().filter(isLoaded => isLoaded).take(1);
  }
}
