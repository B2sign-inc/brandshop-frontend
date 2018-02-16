import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule } from '@angular/material';
import { PaymentService } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  declarations: [PaymentComponent],
  providers: [PaymentService]
})
export class PaymentModule { }
