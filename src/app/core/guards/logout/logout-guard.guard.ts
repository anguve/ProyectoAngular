import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtAuthService } from '../../services/jwtAuth/jwtAuth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuardGuard implements CanActivate {
  constructor(private jwtAuthService:JwtAuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedIn = this.jwtAuthService.isLogout();


      if (!isLoggedIn) {
        void this.router.navigateByUrl('/user/productos');
      }
    return isLoggedIn;
  }

}
