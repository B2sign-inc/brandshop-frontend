import { Component, OnInit } from '@angular/core';

import { Address } from '../../shared/models';
import { AddressService } from '../../shared/services';

import { AddressDialogComponent } from '../address-dialog/address-dialog.component';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(
    private addressService: AddressService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.runQuery(1);
  }

  pageSizeOptions = [5, 15, 50, 100];
  currentPage = 1;
  perPage = 15;
  pageTotal: 1;
  pageFrom = 0;
  pageTo = 0;
  totalPages: Array<number> = [1];

  addresses: Address[];
  address: Address = new Address();

  setPageTo(pageNum) {
    this.currentPage = pageNum;
    this.runQuery(pageNum);
  }

  setPageSize(limit) {
    this.perPage = limit;
    this.runQuery(1);
  }

  runQuery(pageNum) {
    this.addresses = [];

    this.addressService.query({ page: pageNum, limit: this.perPage }).subscribe(data => {
      if (data) {
        this.addresses = data['data'];
        this.currentPage = data['meta'].current_page;
        this.perPage = data['meta'].per_page;
        this.pageFrom = data['meta'].from;
        this.pageTo = data['meta'].to;
        this.pageTotal = data['meta'].total;
        this.totalPages = Array.from(new Array(Math.ceil(this.pageTotal / this.perPage)), (val, index) => index + 1);
      }
    });
  }

  destroy(id) {
    if (this.addresses[id]) {
      this.addressService.destroy(this.addresses[id].id).subscribe(
        result => {
          this.addresses.splice(id, 1);
        }
      );
    }
  }

  openAddressDialog(id): void {
    if (this.addresses[id]) {
      this.addresses[id].usa_states = this.address.usa_states;
      this.submitAddressDialog(this.addresses[id], id);
    } else {
      this.submitAddressDialog(this.address, '');
    }
  }

  submitAddressDialog(data, index) {
    let dialogRef = this.dialog.open(AddressDialogComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.addressService.save(result).subscribe(
            result => {
              if (this.addresses[index]) {
                this.addresses[index] = result['data'];
              } else {
                this.addresses.push(result['data']);
              }
            }
          );
        }
      });
  }
}
