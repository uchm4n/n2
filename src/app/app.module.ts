import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import 'hammerjs';
import {AlertModule, ModalModule} from "ng2-bootstrap";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {RatingModule} from "primeng/components/rating/rating";
import { ButtonModule} from "primeng/components/button/button";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //PrimeNG Modules
    CheckboxModule,RatingModule,ButtonModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
