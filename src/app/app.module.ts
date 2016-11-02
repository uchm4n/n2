import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {FormtestComponent} from "./components/formtest/formtest.component";
import {RatingModule, ModalModule, AlertModule} from "ng2-bootstrap/ng2-bootstrap";
import {FooterComponent} from "./components/footer/footer.component";
import {LogoComponent} from "./components/logo/logo.component";
import {NavComponent} from "./components/nav/nav.component";
import {ContentComponent} from "./components/content/content.component";
import {routing} from "./app.routing";
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./services/auth.service";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NewsComponent } from './components/news/news.component';
// FireBase Config
export const FirebaseConfig = {
    apiKey: "AIzaSyD4Y_CqGPD_ptfBeitzblgqvBLa_u6LhdA",
    authDomain: "toper-c1d66.firebaseapp.com",
    databaseURL: "https://toper-c1d66.firebaseio.com",
    storageBucket: "toper-c1d66.appspot.com",
};
const FirebaseAuthConfigWgs = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password,
    remember: 'default',
    scope: ['email', 'profile']
}

@NgModule({
    declarations: [
        AppComponent,
        FormtestComponent,
        FooterComponent,
        LogoComponent,
        NavComponent,
        ContentComponent,
        SpinnerComponent,
        NewsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RatingModule,
        HttpModule,
        routing,
        ModalModule,AlertModule,
        AngularFireModule.initializeApp(FirebaseConfig, FirebaseAuthConfigWgs)
    ],
    providers: [AuthGuard, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
