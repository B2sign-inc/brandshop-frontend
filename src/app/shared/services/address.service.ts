import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { Address } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class AddressService {

  constructor(
    private apiService: ApiService
  ) { }

  query(page = 1, limit = 15): Observable<any> {
    let params = new HttpParams();
    params.append('page', page.toString());
    params.append('limit', limit.toString());

    return this.apiService.get('addresses', params).map(data => data);
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
