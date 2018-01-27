import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ApiService, TokenService, MessageService, CartService } from '../shared';

import { MatIconModule, MatToolbarModule, MatSnackBarModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { TokenInterceptor } from './http/interceptors/token.interceptor';
import { ErrorHandlerInterceptor } from './http/interceptors/error-hanlder.interceptor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    FlexLayoutModule,

    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
  declarations: [
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
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
    CartService,
  ],
  exports: [
  ]
})
export class CoreModule { }
