import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../../shared';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(private addressService: AddressService) { }

  ngOnInit() {
  }

}
