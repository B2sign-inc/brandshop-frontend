import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { ApiService } from './api.service';

@Injectable()
export class ProductService {

  constructor(private apiService: ApiService) { }

  get(id: number): Observable<Product> {
    return this.apiService.get(`products/${id}`);
  }

}
