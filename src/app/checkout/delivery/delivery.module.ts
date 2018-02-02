import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryOptionComponent } from './delivery-option/delivery-option.component';
import { AddressComponent } from './address/address.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatRadioModule, MatButtonModule, MatPaginatorModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  declarations: [DeliveryOptionComponent, AddressComponent, DeliveryComponent],
})
export class DeliveryModule { }
