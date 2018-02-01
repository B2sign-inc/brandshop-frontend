import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Product, ProductService } from '../../shared';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductResolver implements Resolve<Product> {

  constructor(private productService: ProductService) { }

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = +activatedRoute.paramMap.get('id');
    return this.productService.get(id).map(data => data['data']);
  }
}
