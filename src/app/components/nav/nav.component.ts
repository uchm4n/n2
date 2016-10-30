import {Component, Inject} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {ViewChild} from "@angular/core/src/metadata/di";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {FirebaseApp} from "angularfire2";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
  providers:[AuthService]
})
export class NavComponent {
  
  form:FormGroup;
  constructor(public auth:AuthService, private router: Router,public fb:FormBuilder,@Inject(FirebaseApp) firebaseApp: any) {
    this.form = this.fb.group({
      email:['ucha@clips4sale.com',Validators.required],
      password:['12345678',Validators.required],
    })

  }
  

  @ViewChild('childModal') public childModal:ModalDirective;
  
  public showChildModal():void {
    this.childModal.show();
  }
  
  public hideChildModal():void {
    this.childModal.hide();
  }
  
  signInWithPassword(): void {
  
    this.auth.signInWithPassword(this.form.value.email, this.form.value.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
      console.log(errorMessage)
    }).then(() =>
      {
        this.hideChildModal();
        this.postSignIn();
      }
    );
    
  }
  
  
  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
    .then(() => this.postSignIn());
  }

  logout(): void{
    this.auth.signOut();
    this.postSignIn();
  }

  isAuth(){
    return this.auth.isAuthenticated();
  }

  private postSignIn(): void {
    this.router.navigate(['/']);
  }
  
}
