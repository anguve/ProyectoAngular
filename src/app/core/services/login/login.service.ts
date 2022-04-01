

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private Url = "http://localhost:8000";
  constructor(private http: HttpClient) {}
  public postLogin(params:any): Observable<any> {
    return this.http.post<any>(this.Url + "/api/login",params);
  }

}
