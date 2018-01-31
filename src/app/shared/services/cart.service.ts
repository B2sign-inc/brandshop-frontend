import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart } from '../models/cart.model';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

@Injectable()
export class CartService {

  private cartSubject: BehaviorSubject<Cart>;
  private cartObservable: Observable<Cart>;
  private loaded = false;

  constructor(private apiSerivce: ApiService) {
    this.cartSubject = new BehaviorSubject<Cart>(new Cart());
    this.cartObservable = this.cartSubject.asObservable();
    this.load();
  }

  addItem(product: Product, quantity: number): Observable<Cart> {
    let currentCart = this.cartSubject.getValue();
    let cartItem;

    // product is in the cart already
    // so you are supposed to update the quantity
    if (cartItem = currentCart.items.find(item => item.product.id === product.id)) {

      return this.updateItem(cartItem, cartItem.quantity + quantity);
    } else {
      return this.apiSerivce.post('carts', {
        product_id: product.id,
        quantity: quantity
      }).map(data => {
        const cart = Cart.cast(data['data']);
        this.dispatch(cart);

        return cart;
      });
    }
  }

  updateItem(cartItem: CartItem, quantity: number): Observable<Cart> {
    let currentCart = this.cartSubject.getValue();

    return this.apiSerivce.put(`carts/${cartItem.id}`, {
      quantity: quantity
    }).map(data => {
      const cart = Cart.cast(data['data']);
      this.dispatch(cart);

      return cart;
    });
  }

  removeItem(cartItem: CartItem): Observable<Cart> {
    return this.apiSerivce.delete(`carts/${cartItem.id}`).do(data => {
      const cart = Cart.cast(data['data']);
      this.dispatch(cart);

      return cart;
    });
  }

  emptyCart(): Observable<any> {
    return this.apiSerivce.delete('carts/empty').do(data => {
      this.dispatch(new Cart());
    });
  }

  getCart(): Observable<Cart> {
    return this.cartObservable;
  }

  load(): void {
    if (!this.loaded) {
      this.reload().subscribe(cart => {
        this.loaded = true;
      });
    }
  }

  reload(): Observable<Cart> {
    return this.apiSerivce.get('carts').map(data => {
      const cart = data['data'].items ? Cart.cast(data['data']) : new Cart();
      this.dispatch(cart);

      return cart;
    });
  }

  dispatch(cart: Cart) {
    this.cartSubject.next(cart);
  }
}
