import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartModule } from './cart/cart.module';
import { ShippingModule } from './shipping/shipping.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CartModule,
    ShippingModule,
  ],
  declarations: []
})
export class CheckoutModule { }
