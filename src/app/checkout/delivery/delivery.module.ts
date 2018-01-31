import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryOptionComponent } from './delivery-option/delivery-option.component';
import { AddressComponent } from './address/address.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [DeliveryOptionComponent, AddressComponent, DeliveryComponent],
})
export class DeliveryModule { }
