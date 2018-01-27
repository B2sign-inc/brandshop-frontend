import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CartModule,
  ],
  declarations: []
})
export class CheckoutModule { }
