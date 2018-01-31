import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatListModule, MatButtonModule, MatIconModule, MatTableModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,


    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
  ],
  declarations: [CartComponent],
})
export class CartModule { }
