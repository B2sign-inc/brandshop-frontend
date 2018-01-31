import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartModule } from './cart/cart.module';
import { DeliveryModule } from './delivery/delivery.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CartModule,
    DeliveryModule,
  ],
  declarations: []
})
export class CheckoutModule { }
