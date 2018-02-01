import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../shared';
import { VerifyComponent } from './verify/verify.component';
import { UserComponent } from './user.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
  }, {
    path: 'user/verify/:token',
    component: VerifyComponent,
  }, {
    path: 'user/profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  }, {
    path: 'user/password',
    component: PasswordComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
