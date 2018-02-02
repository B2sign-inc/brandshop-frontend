import { Component, OnInit } from '@angular/core';
import { AddressService, Address } from '../../../shared';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addresses: Address[];

  selectedAddress: Address;

  pageSize = 5;
  pageIndex = 0;
  length: number;
  pageSizeOptions = [5, 10, 25, 100];

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.load(1);
  }

  load(page, limit = 5) {
    this.addressService.query({ page, limit }).subscribe(data => {
      this.addresses = data['data'];
      this.pageSize = data['meta'].per_page;
      this.length = data['meta'].total;
      this.pageIndex = data['meta'].current_page - 1;
    });
  }

  pageChange(o) {
    this.selectedAddress = null;
    this.load(o.pageIndex + 1, o.pageSize);
  }
}
