import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService, TokenService } from '../shared/';

import { MatIconModule, MatToolbarModule } from '@angular/material';
import { TokenInterceptor } from './http/interceptors/token.interceptor';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    MatIconModule,
    MatToolbarModule,
  ],
  declarations: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    ApiService,
    TokenService,
  ],
  exports: [
  ]
})
export class CoreModule { }
