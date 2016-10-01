import {Component} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent{
  constructor(private auth:AuthService){

  }
}
