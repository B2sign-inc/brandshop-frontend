import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../shared';
import { VerifyComponent } from './verify/verify.component';
import { UserComponent } from './user.component';
import { PasswordComponent } from './password/password.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';

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
        path: 'profile',
        component: ProfileComponent,
      }, {
        path: 'password',
        component: PasswordComponent,
      }, {
        path: 'orders',
        component: OrderListComponent
      }, {
        path: 'orders/:id/detail',
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
