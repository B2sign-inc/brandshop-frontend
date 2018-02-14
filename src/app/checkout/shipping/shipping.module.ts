import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatRadioModule, MatButtonModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsStateService, ShippingMethodService, OrderService } from '../../shared';

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
  providers: [UsStateService, ShippingMethodService, OrderService],
  declarations: [ShippingComponent],
})
export class ShippingModule { }
