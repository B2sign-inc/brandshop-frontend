import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { ApiService } from './api.service';

@Injectable()
export class CategoryService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Category[]> {
    return this.apiService.get('categories');
  }

  getProducts(category_id: number): Observable<Product[]> {
    return this.apiService.get(`categories/${category_id}/products`);
  }
}
