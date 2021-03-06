import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { Address } from '../models';

@Injectable()
export class AddressService {

  constructor(
    private apiService: ApiService
  ) { }

  all(): Observable<Address[]> {
    return this.apiService.get('addresses/all');
  }

  query({page = 1, limit = 15}: {page?: number; limit?: number}): Observable<any> {
    return this.apiService.get('addresses', {page, limit});
  }

  get(id): Observable<Address> {
    return this.apiService.get('addresses/' + id);
  }

  destroy(id) {
    return this.apiService.delete('addresses/' + id);
  }

  save(address): Observable<Address> {
    if (address.id) {
      return this.apiService.put('addresses/' + address.id, address);
    } else {
      return this.apiService.post('addresses', address);
    }
  }
}
