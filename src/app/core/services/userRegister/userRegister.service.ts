import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../../interfaces/register/register';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterService {


  private Url = "http://localhost:8000";
  constructor(private http: HttpClient) {}
  public postLogin(params:Register): Observable<Register> {
    return this.http.post<Register>(this.Url + "/api/usuario/registro",params);
  }
}
