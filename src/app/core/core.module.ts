import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NProgressInterceptor } from './http/interceptors/nprogress.interceptor';
import { ApiService } from '../shared/';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NProgressInterceptor,
      multi: true,
    },
    ApiService
  ],
})
export class CoreModule { }
