import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  server_utl = "http://localhost:5000/api";



  constructor(private http: HttpClient) { }

 addtocart(data: any): Observable<any>{
    return this.http.post(this.server_utl + '/orders', data);
 }
 getcountorder(userid): Observable<any>{
  return this.http.get<any>(this.server_utl + '/orders/count/ord/'+userid);
}
getorder(userid): Observable<any>{
  return this.http.get<any>(this.server_utl + '/orders/'+userid);
}
addtoordersdetail(data: any = []): Observable<any>{
  return this.http.post(this.server_utl + '/orderdetail', data);
}
deletefromorders(id:any){
  return this.http.delete(this.server_utl + '/orders/' +id);
}
getordersdetail(id: any = []): Observable<any>{
  return this.http.get(this.server_utl + '/orderdetail/'+ id);
}

}
