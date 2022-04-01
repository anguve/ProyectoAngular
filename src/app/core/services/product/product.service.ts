import { Product } from './../../interfaces/product/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Url = "http://localhost:8000";
  constructor(private http: HttpClient) {}
  public getProduct(): Observable<Product> {
    return this.http.get<Product>(this.Url + "/api/producto");
  }



  public postProduct(params:any): Observable<Product> {
    return this.http.post<Product>(this.Url + "/api/producto/crear",params);
  }

  public editProduct(id:any,params:any): Observable<Product> {
    return this.http.put<Product>(this.Url + `/api/producto/editar/${id}`,params);
  }

  public deleteProduct(id:any,params:any): Observable<Product> {
    return this.http.put<Product>(this.Url + `/api/producto/borrar/${id}`,params);
  }
}
