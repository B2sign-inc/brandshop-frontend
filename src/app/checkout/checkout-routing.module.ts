import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DeliveryComponent } from './delivery/delivery/delivery.component';
import { AuthGuard } from '../shared';
import { CartResolver } from './cart/cart-resolver.service';

const routes: Routes = [
  {
    path: 'checkout',
    redirectTo: 'checkout/cart',
    canActivate: [AuthGuard],
    pathMatch: 'full'
  }, {
    path: 'checkout/cart',
    component: CartComponent,
    resolve: {
      isLoaded: CartResolver
    }
  }, {
    path: 'checkout/delivery',
    component: DeliveryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CartResolver]
})
export class CheckoutRoutingModule { }
