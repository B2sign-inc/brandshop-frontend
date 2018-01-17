import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import * as NProgress from 'nprogress/nprogress.js';

@Injectable()
export class NProgressInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({ reportProgress: true});
        NProgress.start();

        return next.handle(clonedRequest).do(event => {
            if (event.type === HttpEventType.DownloadProgress) {
                // This is an upload progress event. Compute and show the % done:
                const done = Math.round(event.loaded / event.total);
                NProgress.set(done);
            } else if (event instanceof HttpResponse) {
                NProgress.done();
            }
        }, error => {
            if (error instanceof HttpErrorResponse) {
                NProgress.done();
                // TODO show error message
                // alert(error.message);
            }
        });
    }
}
