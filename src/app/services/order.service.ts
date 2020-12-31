import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/api-url.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
constructor(private http: HttpClient) { }

addtocart(data: any): Observable<any>{
    return this.http.post(ApiUrl.API_URL + '/orders', data);
 }
getcountorder(userid): Observable<any>{
  return this.http.get<any>(ApiUrl.API_URL + '/orders/count/ord/'+userid);
}
getorder(userid): Observable<any>{
  return this.http.get<any>(ApiUrl.API_URL + '/orders/'+userid);
}
addtoordersdetail(data: any = []): Observable<any>{
  return this.http.post(ApiUrl.API_URL + '/orderdetail', data);
}
deletefromorders(id:any){
  return this.http.delete(ApiUrl.API_URL + '/orders/' +id);
}
getordersdetail(id: any = []): Observable<any>{
  return this.http.get(ApiUrl.API_URL + '/orderdetail/'+ id)
}
fetchorder(orderid: any = []): Observable<any>{
  return this.http.get(ApiUrl.API_URL + '/orders/fetch/'+ orderid);
}
fetchorderdetail(orderdetailid: any = []): Observable<any>{
  return this.http.get(ApiUrl.API_URL + '/orderdetail/fetch/'+ orderdetailid);
}
updateorder(orderid: any = [], data): Observable<any>{
  return this.http.put(ApiUrl.API_URL + '/orders/'+ orderid, data);
}

}
