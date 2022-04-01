import { localStorageJwt } from './../../localStorage/localStorage';
import { JwtAuthService } from './../../services/jwtAuth/jwtAuth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private jwtAuthService:JwtAuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedIn = this.jwtAuthService.isLoggedIn();


      if (!isLoggedIn) {
        void this.router.navigateByUrl('/login');
      }
    return isLoggedIn;
  }

}
