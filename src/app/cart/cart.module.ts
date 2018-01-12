import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { StoreComponent } from './store/store.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [StoreComponent]
})
export class CartModule { }
