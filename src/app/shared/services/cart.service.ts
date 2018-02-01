import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart } from '../models/cart.model';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class CartService {

  private cartSubject: BehaviorSubject<Cart>;
  private cartObservable: Observable<Cart>;

  private isLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLoadedObservable = this.isLoadedSubject.asObservable().distinctUntilChanged();

  constructor(private apiSerivce: ApiService) {
    this.cartSubject = new BehaviorSubject<Cart>(null);
    this.cartObservable = this.cartSubject.asObservable();
    this.load();
  }

  getCurrentCart(): Cart {
    return this.cartSubject.getValue() !== null ? this.cartSubject.getValue() : new Cart();
  }

  addItem(product: Product, quantity: number): Observable<Cart> {
    let currentCart = this.getCurrentCart();
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
    let currentCart = this.getCurrentCart();

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
    return this.cartObservable.filter(cart => cart !== null);
  }

  load(): void {
    if (!this.isLoadedSubject.getValue()) {
      this.reload().subscribe(cart => {
        this.isLoadedSubject.next(true);
      });
    }
  }

  isLoaded(): Observable<boolean> {
    return this.isLoadedObservable;
  }

  reload(): Observable<Cart> {
    return this.apiSerivce.get('carts').map(data => {
      const cart = data['data'].items ? Cart.cast(data['data']) : new Cart();
      this.isLoadedSubject.next(true);
      this.dispatch(cart);

      return cart;
    });
  }

  dispatch(cart: Cart) {
    this.cartSubject.next(cart);
  }
}
