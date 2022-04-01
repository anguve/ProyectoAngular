
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    console.log("***********", req);

    const token = localStorage.getItem('acces_token')!;

    const requestClone = req.clone({
      headers:req.headers.set('Authorization', `Bearer ${token}`)
    });




    return next.handle(requestClone);
  }


}
