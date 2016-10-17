///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {ViewChild} from "@angular/core/src/metadata/di";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms/src/directives";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
  providers:[AuthService]
})
export class NavComponent implements  OnInit{
  
  form:FormGroup;
  authenticated;
  constructor(public auth:AuthService, private router: Router,public fb:FormBuilder) {
    this.form = this.fb.group({
      email:['ucha19871@gmail.com',Validators.required],
      password:['12345678',Validators.required],
    })
    
  }
  
  ngOnInit(): void {
    console.log(this.auth.authState)
    this.authenticated = this.auth.authState;
  }
  
  
  @ViewChild('childModal') public childModal:ModalDirective;
  
  public showChildModal():void {
    this.childModal.show();
  }
  
  public hideChildModal():void {
    this.childModal.hide();
  }
  
  signInWithPassword(): void {
  
    this.auth.signInWithPassword(this.form.value.email, this.form.value.password).catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
      console.log(errorMessage)
    }).then(() =>
      {
        this.postSignIn();
        this.authenticated = true;
      }
    );
    
  }
  
  
  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
    .then(() => this.postSignIn());
  }
  
  private postSignIn(): void {
    this.router.navigate(['/']);
  }
  
}
