import {AuthService} from "./services/auth.service";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router) {
  }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.authenticated()) {
      console.log('Passed By Guard')
      return true;
    } else {
      console.log('Blocked By Guard')
      this.route.navigate(['/']);
      return false;
    }
    
  }
  
}
