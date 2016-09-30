import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlite.directive';
import { TestComponent } from './test/test.component';
import {routing} from "./app.routing";
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { Err404Component } from './err404/err404.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TestComponent,
    NavComponent,
    AboutComponent,
    Err404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
