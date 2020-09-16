import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyAuthService } from './services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private toastr: ToastrService,
    public authService: MyAuthService,
    public router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn() !== true) {
        this.toastr.error('tu dois créer un compte pour y accéder', 'Désolé', {
          timeOut: 4000, positionClass: 'toast-top-left'
        });
        this.router.navigate(['/login'])
      }
    return true;
  }
  
}
