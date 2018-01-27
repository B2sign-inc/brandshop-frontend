import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService, Cart, CartItem } from '../../shared';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  cart: Cart = new Cart();
  cartSubscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartSubscription = this.cartService.getCart().subscribe(cart => this.cart = cart);
  }

  emptyCart(): void {
    this.cartService.emptyCart();
  }

  removeItem(cartItem: CartItem): void {
    this.cartService.removeItem(cartItem);
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

}
