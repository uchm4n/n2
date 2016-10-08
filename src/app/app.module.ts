import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from "./app.routing";
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlite.directive';
import { Err404Component } from './components/err404/err404.component';
import {AuthService} from "./services/auth.service";
import {AUTH_PROVIDERS} from "angular2-jwt";
import { ProfileComponent } from './components/profile/profile.component';
import {AuthGuard} from "./auth.guard";
import { MaterialModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {AngularFireModule} from "angularfire2";
import {AboutComponent} from "./about/about.component";


// FireBase Config
export const firebaseConfig = {
  apiKey: "AIzaSyD08qdX8tgcuh9d745_xkDolK0fgBshSGU",
  authDomain: "project-5995607935968490987.firebaseapp.com",
  databaseURL: "https://project-5995607935968490987.firebaseio.com",
  storageBucket: "project-5995607935968490987.appspot.com",
};

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ProfileComponent,
    Err404Component,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBVp596mYM-BWWRsQZds-0xGQartHRJhCc'}),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService,AUTH_PROVIDERS,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
