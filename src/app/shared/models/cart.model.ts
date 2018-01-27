import { CartItem } from "./cart-item.model";

export class Cart {
  items: CartItem[] = new Array<CartItem>();

  get total(): number {
    if (this.items.length > 0 ) {
      return this.items.reduce((accumulator, cartItem) => accumulator + cartItem.product.price, 0);
    }
    return 0;
  }

  static cast(o): Cart {
    let cart = new Cart();

    cart.items = o.items;

    return cart;
  }
}
