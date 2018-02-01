import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Product, CategoryService } from '../../shared';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductListResolver implements Resolve<Product[]> {

  constructor(private categoryServie: CategoryService) { }

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    const id = +activatedRoute.paramMap.get('id');
    return this.categoryServie.getProducts(id).map(data => data['data']);
  }
}
