import { Component, OnInit } from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {ViewChild} from "@angular/core/src/metadata/di";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
  providers:[AuthService]
})
export class NavComponent implements OnInit {

  constructor(public auth:AuthService, private router: Router) {
    
  }

  ngOnInit() {
  }
  
  @ViewChild('childModal') public childModal:ModalDirective;
  
  public showChildModal():void {
    this.childModal.show();
  }
  
  public hideChildModal():void {
    this.childModal.hide();
  }
  
  signInWithGithub(): void {
    this.auth.signInWithGithub()
    .then(() => this.postSignIn());
  }
  
  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
    .then(() => this.postSignIn());
  }
  
  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
    .then(() => this.postSignIn());
  }
  
  private postSignIn(): void {
    this.router.navigate(['/tasks']);
  }
  
}
