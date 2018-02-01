import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

const routes: Routes = [
  {
    path: 'password/forgot',
    component: PasswordForgotComponent
  }, {
    path: 'password/reset/:token',
    component: PasswordResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
