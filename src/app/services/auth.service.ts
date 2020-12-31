import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { ApiUrl } from '../models/api-url.model';
import { async } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class MyAuthService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  msgerr: any;
  constructor(private toastr: ToastrService,private httpClient: HttpClient,public router: Router) {
    this.currentUserSubject = new BehaviorSubject(localStorage.getItem('currentUser')|| '');
    this.currentUser = this.currentUserSubject.asObservable();
   }

register(user: User): Observable<any> {
  return this.httpClient.post(ApiUrl.API_URL + "/users/register", user)}

login(user: User) {
  return new Promise((resolve, reject) => {
   this.httpClient.post<any>(ApiUrl.API_URL + "/users/login", user)
    .subscribe((data: any) => {
      localStorage.setItem('access_token', data.token)
      localStorage.setItem('currentUser', JSON.stringify( data.user))
      this.currentUserSubject.next(data.user);
      this.getUserProfile(data.user._id).subscribe(async (res) => {
      await  this.router.navigate(['/profile/' + res._id]).then(() => {
      window.location.reload();});
      this.toastr.success('Tu peux maintenant acheté', 'Bienvenue', {
          positionClass: 'toast-top-left',
        });
      })
    }, (error) =>  {this.msgerr = error.error, resolve(this.msgerr)}
    )})
}

getCurrentUser(): any {
  return this.currentUserSubject.getValue();
}
getAccessToken() {
  return localStorage.getItem('access_token');
}

isLoggedIn(): boolean {
  let authToken = localStorage.getItem('access_token');
  return (authToken !== null) ? true : false;
}

logout() {
  if (localStorage.removeItem('access_token') == null) {
    localStorage.clear();
    this.router.navigate(['login']);
    this.toastr.error('Tu es deconnecté(e)', 'Doconnecté(e)', {
      timeOut: 3000,
    });
  }
}

getUserProfile(id: any): Observable<any> {
  return this.httpClient.get(ApiUrl.API_URL + "/users/"+id, { headers: this.headers }).pipe(
    map((res: Response) => {
      return res || {}
    })
  )
}
updateUserProfile(id, data): Observable<any> {
  return this.httpClient.put(ApiUrl.API_URL + "/users/"+id,data)}

updateUserPassword(id, data): Observable<any> {
  return this.httpClient.put(ApiUrl.API_URL + "/users/password/"+id,data)}

sendemailforresetpassword(user: User): Observable<any>{
return this.httpClient.post(ApiUrl.API_URL + "/users/resetpssword",user)}

}

