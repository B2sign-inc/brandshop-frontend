import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService, TokenService, MessageService } from '../shared/';

import { MatIconModule, MatToolbarModule, MatSnackBarModule } from '@angular/material';
import { TokenInterceptor } from './http/interceptors/token.interceptor';
import { ErrorHandlerInterceptor } from './http/interceptors/error-hanlder.interceptor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
  declarations: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    ApiService,
    TokenService,
    MessageService,
  ],
  exports: [
  ]
})
export class CoreModule { }
