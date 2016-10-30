import {AuthService} from "./services/auth.service";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService){}

  canActivate(route:ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<boolean> | boolean{
    return this.auth.isAuthenticated();
  }
  
}
