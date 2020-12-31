import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/api-url.model';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  
  sendMessage(data: any): Observable<any>{
    return this.http.post(ApiUrl.API_URL + '/contact', data);
 }
}
