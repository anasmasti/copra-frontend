import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  server_utl = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }


    getproducts(){
      return this.http.get<any>( this.server_utl + '/products');
    }
}
