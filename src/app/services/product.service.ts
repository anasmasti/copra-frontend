import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  server_utl = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }


    getproducts(): Observable<any>{
      return this.http.get<any>( this.server_utl + '/products');
    }
    selectproducts(id): Observable<any>{
      return this.http.get<any>( this.server_utl + '/products/p/'+id);
    }
    getproductsbycategory(id: string): Observable<any>{
      return this.http.get<any>( this.server_utl + '/products/prod/'+id);
    }
    getcategory(): Observable<any>{
      return this.http.get<any>( this.server_utl + '/category');
    }
    getprodbycoprafood(): Observable<any>{
      return this.http.get<any>( this.server_utl + '/products/coprafood');
    }
    getprodbycoprapromo(): Observable<any>{
      return this.http.get<any>( this.server_utl + '/products/coprapromo');
    }
    getprodbycopraoriginal(): Observable<any>{
      return this.http.get<any>( this.server_utl + '/products/copraoriginal');
    } 
}

