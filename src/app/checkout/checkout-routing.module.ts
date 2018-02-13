import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping/shipping.component';
import { AuthGuard } from '../shared';
import { CartResolver } from './cart/cart-resolver.service';

const routes: Routes = [
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'cart',
        pathMatch: 'full',
      }, {
        path: 'cart',
        component: CartComponent,
        resolve: {
          isLoaded: CartResolver
        }
      }, {
        path: 'delivery',
        component: ShippingComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CartResolver]
})
export class CheckoutRoutingModule { }
