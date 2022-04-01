import { Users } from './../../interfaces/users/users';


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private Url = "http://localhost:8000";
  constructor(private http: HttpClient) {}


  public getUsers(): Observable<Users> {
    return this.http.get<Users>(this.Url + "/api/usuario");
  }
  public putUsers(id:any, params:any): Observable<Users> {
    return this.http.put<Users>(this.Url + `/api/usuario/editar/${id}`,params);
  }


  public deleteUsers(id:any, params:any): Observable<Users> {
    return this.http.put<Users>(this.Url + `/api/usuario/borrar/${id}`,params);
  }
}

