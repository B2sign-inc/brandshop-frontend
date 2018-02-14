import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingMethodComponent } from './shipping-method/shipping-method.component';
import { AddressComponent } from './address/address.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatRadioModule, MatButtonModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsStateService, ShippingMethodService } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [UsStateService, ShippingMethodService],
  declarations: [ShippingMethodComponent, AddressComponent, ShippingComponent],
})
export class ShippingModule { }
