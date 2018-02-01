import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService, Cart, CartItem } from '../../shared';
import { Subscription } from 'rxjs/Subscription';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  displayedColumns = ['productName', 'quantity', 'price', 'actions'];

  dataSource = new MatTableDataSource<CartItem>();

  cart: Cart = new Cart();

  cartSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {isLoaded: Cart}) => {
      this.cartSubscription = this.cartService.getCart().subscribe(cart => {
        this.dataSource.data = cart.items;
        this.cart = cart;
      })
    });
  }

  emptyCart(): void {
    this.cartService.emptyCart().subscribe();
  }

  removeItem(cartItem: CartItem): void {
    this.cartService.removeItem(cartItem).subscribe();
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
