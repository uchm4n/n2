import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
    .menu-link{
      text-decoration: none;
      display: inline-block;
      color: #6c6c6c;
    }
  `]
})
export class AppComponent {
  constructor(private auth:AuthService){
  }
}
