import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product, CartService } from '../../shared';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;
  private _productId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {product: Product}) => {
      this.product = data.product;
    });
  }

  productId(): number {
    if (!this._productId) {
      this._productId = +this.activatedRoute.snapshot.paramMap.get('id');
    }
    return this._productId;
  }

  addToCart(): void {
    this.cartService.addItem(this.product, 1).subscribe();
  }
}
