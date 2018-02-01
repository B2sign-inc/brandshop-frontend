import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { AuthService, TokenService } from '../../../shared';
import { Router } from '@angular/router/';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  /**
   * can't dependency inject
   * @see https://github.com/angular/angular/issues/18224
   */
  private _authService: AuthService;

  private isRefreshingToken: boolean = false;
  private tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private injector: Injector,
    private router: Router,
    private tokenService: TokenService,
  ) {
  }

  private authService(): AuthService {
    if (!this._authService) {
      this._authService = this.injector.get(AuthService);
    }
    return this._authService;
  }

  newRequestWithToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } })
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getAccessToken();
    req = !!token ? this.newRequestWithToken(req, token) : req;

    return next.handle(req).catch(error => {
      if (error instanceof HttpErrorResponse) {
        switch ((<HttpErrorResponse>error).status) {
          case 400:
            return this.handle400Error(error);
          case 401:
            // unnecessary to refresh token while login
            if (error.url.indexOf('login') !== -1) {
              return this.handleDefaultError(error);
            }
            return this.handle401Error(req, next);
          default:
            return this.handleDefaultError(error);
        }
      } else {
        return this.handleDefaultError(error);
      }
    })
  }


  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.tokenSubject.next(null);

      // refresh token
      return this.authService().refreshToken()
        .switchMap(token => {
          if (Object.prototype.hasOwnProperty.call(token, 'access_token')) {
            this.authService().setAuth(token);
            this.tokenSubject.next(token['access_token']);
            return next.handle(this.newRequestWithToken(req, token['access_token']));
          }

          // If we don't get a new token, we are in trouble so logout.
          // TODO
          return this.handleCantGetNewToken();
        }).catch(error => {
          return this.handleCantGetNewToken();
        }).finally(() => {
          this.isRefreshingToken = false;
        });
    } else if (req.url.indexOf('token/refresh') !== -1) {
      this.tokenSubject.complete();
      return Observable.throw('refresh token 401.');
    } else {
      return this.tokenSubject
        .filter(token => token !== null)
        .take(1)
        .switchMap(token => next.handle(this.newRequestWithToken(req, token)));
    }

  }

  handle400Error(error) {
    if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
      // TODO handle 400 error
      // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
      return Observable.throw("");
    }

    return Observable.throw(error);
  }

  handleDefaultError(error) {
    return Observable.throw(error);
  }

  handleCantGetNewToken() {
    this.authService().purgeAuth();
    this.redirectToLoin();
    return Observable.throw('refresh token 401.');
  }

  redirectToLoin(): void {
    this.router.navigate(['/login']);
  }
}
