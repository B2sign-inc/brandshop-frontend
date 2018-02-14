import { Component, OnInit } from '@angular/core';
import { ShippingMethod, ShippingMethodService } from '../../../shared';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.component.html',
  styleUrls: ['./shipping-method.component.scss']
})
export class ShippingMethodComponent implements OnInit {

  selectedShippingMethod: ShippingMethod;

  shippingMethods: ShippingMethod[];

  constructor(private shippingMethodService: ShippingMethodService) { }

  ngOnInit() {
    this.shippingMethodService.all().subscribe(data => {
      this.shippingMethods = data['data'];
      this.selectedShippingMethod = this.shippingMethods[0];
    });
  }
}
