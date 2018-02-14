import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartModule } from './cart/cart.module';
import { ShippingModule } from './shipping/shipping.module';
import { PaymentModule } from './payment/payment.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CartModule,
    ShippingModule,
    PaymentModule,
  ],
  declarations: []
})
export class CheckoutModule { }
