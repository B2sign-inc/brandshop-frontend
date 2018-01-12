import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NProgressInterceptor } from './http/interceptors/nprogress.interceptor';
import { ApiService } from '../shared/';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [
    NavComponent,
    FooterComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NProgressInterceptor,
      multi: true,
    },
    ApiService
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
