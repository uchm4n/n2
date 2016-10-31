import {Component, Inject} from "@angular/core";
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
    providers: [AuthService]
})
export class NavComponent {

    isLoading: boolean = false;
    form: FormGroup;
    errorMessage;

    constructor(public auth: AuthService,
                private router: Router,
                public fb: FormBuilder,
                @Inject(FirebaseApp) firebaseApp: any) {
        this.form = this.fb.group({
            email: [null, Validators.compose([Validators.required, Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')])],
            password: ['', Validators.required],
        })

    }


    @ViewChild('staticModal') public staticModal: ModalDirective;

    public showStaticModal(): void {
        this.staticModal.show();
    }

    public hideStaticModal(): void {
        this.staticModal.hide();
    }

    signInWithPassword(): void {
        this.isLoading = true;

        this.auth.signInWithPassword(this.form.value.email, this.form.value.password)
            .then(() => {
                this.isLoading = false;
                this.postSignIn();
                return this.staticModal.hide();
            })
            .catch((error) => {
                // Handle Errors here.
                this.isLoading = false;
                this.errorMessage = error.message;

            });

    }


    signInWithGoogle(): void {
        this.auth.signInWithGoogle()
            .then(() => this.postSignIn());
    }

    logout(): void {
        this.auth.signOut();
        this.postSignIn();
    }

    isAuth() {
        return this.auth.isAuthenticated();
    }

    private postSignIn(): void {
        this.router.navigate(['/']);
    }

}
