import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { AuthService, TokenService } from '../../../shared';
import { Router } from '@angular/router/';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    // @see https://github.com/angular/angular/issues/18224
    private injector: Injector,
    private router: Router,
    private tokenService: TokenService
  ) { }

  newRequestWithToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } })
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getAccessToken();
    req = !!token ? this.newRequestWithToken(req, token) : req;

    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (error: any) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          // redirect to the login route
          // or show a modal
          this.handle401Error(req, next);
        }
      }
    });
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler): void {
    // refresh token
    const authSerivce = this.injector.get(AuthService);
    authSerivce.refreshToken().subscribe(
      token => {
        this.tokenService.saveAccessToken(token['access_token']);
        this.tokenService.saveRefreshToken(token['refresh_token']);
        return next.handle(this.newRequestWithToken(req, token['access_token']));
      },
      error => {
        // both of refresh and access token is expired
        authSerivce.purgeAuth();
        this.redirectToLoin();
      },
      // complete
      () => {

      }
    )
  }

  redirectToLoin(): void {
    this.router.navigate['/login'];
  }
}
