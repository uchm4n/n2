import {AuthService} from "./services/auth.service";
import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';



@Injectable()
export class AuthGuard {
  constructor(private auth: AuthService, private router: Router) {}
  
  // canActivate(){
  //   return console.log('')
  //   // this.auth.auth$
  //   // .take(1)
  //   // .map(authState => !!authState)
  //   // .do(authenticated => {
  //   //   if (!authenticated) {
  //   //     this.router.navigate(['/']);
  //   //   }
  //   // });
  // }
  
}
