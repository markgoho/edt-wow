import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && !event.body.name) {
          event.body.empty = true;
          console.log(event.body);
        }
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          const error = JSON.parse(err.error);
          console.log('ERROR:', error.reason);
        }
      }
    );
  }
}
