import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../shared';
import { VerifyComponent } from './verify/verify.component';
import { UserComponent } from './user.component';
import { PasswordComponent } from './password/password.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { AddressListComponent } from './address-book/address-list/address-list.component';
import { MessageListComponent } from './email-message/message-list/message-list.component';
import { MessageDetailComponent } from './email-message/message-detail/message-detail.component';

const routes: Routes = [
  {
    path: 'user/verify/:token',
    component: VerifyComponent,
  }, {
    path: 'user',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UserComponent,
        pathMatch: 'full'
      }, {
        path: 'addresses',
        component: AddressListComponent,
      }, {
        path: 'messages',
        component: MessageListComponent,
      }, {
        path: 'messages/:id',
        component: MessageDetailComponent,
      }, {
        path: 'profile',
        component: ProfileComponent,
      }, {
        path: 'password',
        component: PasswordComponent,
      }, {
        path: 'orders',
        component: OrderListComponent
      }, {
        path: 'orders/:id',
        component: OrderDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
