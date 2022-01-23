import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        "Accept": "application/json",
        
         }
    });
    return next.handle(request)
      .pipe(catchError(err => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
                console.log('this should print your error!', err.error);
            }
        }
        return new Observable<HttpEvent<any>>();
}));
  }
}
