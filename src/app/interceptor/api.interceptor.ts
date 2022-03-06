import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {LoadingService} from '../services/loading.service';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private loader:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.start();
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
        this.loader.end();
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
                console.log('this should print your error!', err.error);
            }
        }
        return new Observable<HttpEvent<any>>();
}));
  }
}
