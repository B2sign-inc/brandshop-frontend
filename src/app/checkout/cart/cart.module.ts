import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatListModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [CartComponent],
})
export class CartModule { }
