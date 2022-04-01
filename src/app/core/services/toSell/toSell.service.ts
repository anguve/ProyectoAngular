import { ToSell } from './../../interfaces/toSell/toSell';

import { Product } from './../../interfaces/product/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToSellService {
  private Url = "http://localhost:8000";

  constructor(private http: HttpClient) {}

  public getSell(): Observable<ToSell> {
    return this.http.get<ToSell>(this.Url + "/api/venta");
  }



  public postSell(params:ToSell): Observable<ToSell> {
    return this.http.post<ToSell>(this.Url + "/api/venta/crear",params);
  }


}
