import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-menu',
  template: `
    <md-list class="app-list">
      <h3 md-subheader>Navigation</h3>
      <md-list-item>
        <h4 md-line><a routerLink="">Home</a></h4>
        <h4 md-line *ngIf="auth.authenticated()"><a [routerLink]="['profile']">Profile</a></h4>
        <h4 md-line><a [routerLink]="['about']">About</a></h4>
      </md-list-item>
      
      <md-divider></md-divider>
      <md-list-item *ngIf="!auth.authenticated()"><h4 md-line><a  (click)="auth.login()" routerLink="">Login</a></h4></md-list-item>
      <md-list-item *ngIf="auth.authenticated()"><h4 md-line><a (click)="auth.logout()" routerLink="">Logout</a></h4></md-list-item>
    </md-list>`
})
export class MenuComponent {

  constructor(private auth:AuthService){
    
  }
}
