import { Component, OnInit } from '@angular/core';
import { CategoryService, Product } from '../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[]

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {products: Product[]}) => {
      this.products = _.chunk(data.products, 2);
    });
  }

  goToProductDetail(product): void {
    this.router.navigate([`products/${product.id}`]);
  }
}
