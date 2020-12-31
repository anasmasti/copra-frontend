import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/api-url.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 constructor(private http: HttpClient) { }

  getproducts(): Observable<any>{
    return this.http.get<any>( ApiUrl.API_URL + '/products');
  }
  gettrendproducts(): Observable<any>{
    return this.http.get<any>( ApiUrl.API_URL + '/products/trend');
  }
  selectproducts(id): Observable<any>{
    return this.http.get<any>( ApiUrl.API_URL + '/products/p/'+id);
  }
  getproductsbycategory(id: string): Observable<any>{
    return this.http.get<any>( ApiUrl.API_URL + '/products/prod/'+id);
  }
  getcategory(): Observable<any>{
    return this.http.get<any>( ApiUrl.API_URL + '/category');
  }
  getprodbycoprafood(): Observable<any>{
    return this.http.get<any>( ApiUrl.API_URL + '/products/coprafood');
  }
  getprodbycoprapromo(): Observable<any>{
    return this.http.get<any>( ApiUrl.API_URL + '/products/coprapromo');
  }
  getprodbycopraoriginal(): Observable<any>{
    return this.http.get<any>( ApiUrl.API_URL + '/products/copraoriginal');
  } 
}

