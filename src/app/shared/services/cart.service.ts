import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart } from '../models/cart.model';
import { Observable } from 'rxjs/Observable';

const CART_KEY = 'cart';

@Injectable()
export class CartService {

  private cartSubject: BehaviorSubject<Cart>;
  private cartObservable: Observable<Cart>;

  constructor() {
    this.cartSubject = new BehaviorSubject<Cart>(this.retrieve());
    this.cartObservable = this.cartSubject.asObservable();

    this.cartObservable.subscribe(cart => this.save(cart));
  }

  addItem(product: Product, quantity: number): void {
    let cart = this.cartSubject.getValue();
    let item = cart.items.find((cartItem) => cartItem.product.id === product.id);

    if (item === undefined) {
      item = new CartItem();
      item.product = product;
      cart.items.push(item);
    }

    item.quantity += quantity;

    this.cartSubject.next(cart);
  }

  removeItem(item: CartItem): void {
    let cart = this.cartSubject.getValue();
    cart.items = cart.items.filter(_item => _item !== item);

    this.cartSubject.next(cart);
  }

  emptyCart(): void {
    this.cartSubject.next(new Cart());
  }

  getCart(): Observable<Cart> {
    return this.cartObservable;
  }

  private save(cart: Cart): void {
    // TODO save to server
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  private retrieve(): Cart {
    // TODO retrieve from server
    const storedCart = window.localStorage.getItem(CART_KEY);
    if (storedCart) {
      return Cart.cast(JSON.parse(storedCart));
    }

    return new Cart();
  }
}
