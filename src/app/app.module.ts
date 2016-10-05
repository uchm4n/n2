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

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ProfileComponent,
    Err404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [AuthService,AUTH_PROVIDERS,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
