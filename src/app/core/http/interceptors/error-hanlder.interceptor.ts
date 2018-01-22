import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { MessageService } from '../../../shared';


@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor (private messageService: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).catch(error => {

      // TODO report and render error
      this.messageService.message(error.message);
      return Observable.throw(error);
    });
  }
}
