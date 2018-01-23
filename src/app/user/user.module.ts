import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { VerifyComponent } from './verify/verify.component';
import { UserService } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [UserService],
  declarations: [ProfileComponent, VerifyComponent]
})
export class UserModule { }
