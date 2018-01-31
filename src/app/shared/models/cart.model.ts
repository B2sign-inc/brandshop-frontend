import { CartItem } from "./cart-item.model";

export class Cart {
  items: CartItem[] = new Array<CartItem>();

  total: 0;

  static cast(o): Cart {
    let cart = new Cart();
    cart.items = o.items;
    cart.total = o.total;

    return cart;
  }
}
