import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageTokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
      filter((event: any) => event instanceof HttpResponse),
      map((event: HttpResponse<any>) => {
        const token = event.headers.get('Authorization');
        if (token) localStorage.setItem('accessToken', token);
        return event;
      })
    );
  }
}
