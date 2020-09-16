import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class MyAuthService {
  API_URL: string = 'http://localhost:5000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private toastr: ToastrService,private httpClient: HttpClient,public router: Router) {

    this.currentUserSubject = new BehaviorSubject(localStorage.getItem('currentUser')|| '');
    this.currentUser = this.currentUserSubject.asObservable();
   }
 

register(user: User): Observable<any> {
  return this.httpClient.post(`${this.API_URL}/users/register`, user).pipe(
      catchError(this.handleError)
  )
}

login(user: User) {
  return this.httpClient.post<any>(`${this.API_URL}/users/login`, user)
    .subscribe((data: any) => {
      localStorage.setItem('access_token', data.token)
      localStorage.setItem('currentUser', JSON.stringify( data.user))
      this.currentUserSubject.next(data.user);
      this.getUserProfile(data.user._id).subscribe((res) => {
        this.router.navigate(['/profile/' + res._id]);
        this.toastr.success('Tu peux maintenant acheté', 'Bienvenue', {
          positionClass: 'toast-top-left',
        });
      })
    })
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

getUserProfile(id): Observable<any> {
  return this.httpClient.get(`${this.API_URL}/users/`+id, { headers: this.headers }).pipe(
    map((res: Response) => {
      return res || {}
    }),
    catchError(this.handleError)
  )
}
updateUserProfile(id, data): Observable<any> {
  return this.httpClient.put(`${this.API_URL}/users/`+id,data)}

updateUserPassword(id, data): Observable<any> {
  return this.httpClient.put(`${this.API_URL}/users/password/`+id,data)}

handleError(error: HttpErrorResponse) {
  let msg = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
}

}

