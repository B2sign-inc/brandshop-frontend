import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService, AuthGuard } from '../shared';

import { MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { ListErrorsComponent } from './list-errors/list-errors.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  declarations: [LoginComponent, RegisterComponent, ListErrorsComponent],
  providers: [
    AuthService,
    AuthGuard,
  ]
})
export class AuthModule { }
