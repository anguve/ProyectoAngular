
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roll,dataRoll  } from '../../interfaces/roll/roll';


@Injectable({
  providedIn: 'root',
})
export class RollService {
  private Url = "http://localhost:8000";
  constructor(private http: HttpClient) {}


  public getRoll(): Observable<Roll> {
    return this.http.get<Roll>(this.Url + "/api/roll");
  }
  public postRoll( params:dataRoll ): Observable<dataRoll> {
    return this.http.post<dataRoll>(this.Url + `/api/roll/crear`,params);
  }
  public putRoll(id:any, params:dataRoll ): Observable<dataRoll> {
    return this.http.put<dataRoll>(this.Url + `/api/roll/editar/${id}`,params);
  }


  public deleteRoll(id:any, params:dataRoll): Observable<dataRoll> {
    return this.http.put<dataRoll>(this.Url + `/api/roll/borrar/${id}`,params);
  }

}
