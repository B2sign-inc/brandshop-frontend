import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyComponent } from './verify/verify.component';
import { UserService } from '../shared';

import {
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
  ],
  providers: [UserService],
  declarations: [UserComponent, ProfileComponent, VerifyComponent]
})
export class UserModule { }
