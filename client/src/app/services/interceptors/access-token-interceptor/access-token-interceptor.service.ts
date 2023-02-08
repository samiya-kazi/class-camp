import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessTokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');
    if (token && !req.url.includes('cloudinary')) {
      const clonedReq = req.clone({setHeaders: {'Authorization': token}});
      return next.handle(clonedReq);
    } else return next.handle(req)
  }
}
