import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DeliveryComponent } from './delivery/delivery/delivery.component';
import { AuthGuard } from '../shared';

const routes: Routes = [
  {
    path: 'checkout',
    redirectTo: 'checkout/cart',
    pathMatch: 'full'
  }, {
    path: 'checkout/cart',
    component: CartComponent
  }, {
    path: 'checkout/delivery',
    component: DeliveryComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
