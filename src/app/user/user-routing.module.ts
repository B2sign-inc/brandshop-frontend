import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../shared';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {
    path: 'user',
    redirectTo: 'users/profile',
    pathMatch: 'full'
  },{
    path: 'user/verify/:token',
    component: VerifyComponent,
  },{
    path: 'user/profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
