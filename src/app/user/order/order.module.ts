import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderDetailComponent, OrderListComponent]
})
export class OrderModule { }
