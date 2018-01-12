import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NProgressInterceptor } from './http/interceptors/nprogress.interceptor';
import { ApiService } from '../shared/';

import { MatIconModule, MatToolbarModule } from '@angular/material';

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
      useClass: NProgressInterceptor,
      multi: true,
    },
    ApiService
  ],
  exports: [
  ]
})
export class CoreModule { }
