import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AuthGuard } from '../shared';
import { CartResolver } from './cart/cart-resolver.service';
import { PaymentComponent } from './payment/payment.component';
import { PaymentOrderResolver } from './payment/payment-order-resolver.service';

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
        path: 'shipping',
        component: ShippingComponent,
      }, {
        path: ':orderId/payment',
        component: PaymentComponent,
        resolve: {
          order: PaymentOrderResolver
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CartResolver, PaymentOrderResolver]
})
export class CheckoutRoutingModule { }
