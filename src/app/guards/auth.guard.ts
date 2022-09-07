import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    LoginComponent: any;
  constructor(private auth: AuthService, private router: Router) {}
  canActivate() {
    if (this.auth.isLoggedin()) {
      return true;
    }
    this.router.navigate(['landingpage']);
    return false;
  }
  
}
