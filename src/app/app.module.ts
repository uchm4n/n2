import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import "hammerjs";
import {AlertModule} from "ng2-bootstrap";
import {MenuComponent} from "./components/menu/menu.component";
import {AppRoutingModule} from "./app.routing";
import {TasksComponent} from "./components/tasks/tasks.component";
import {DataListModule} from "primeng/components/datalist/datalist";
import { HomeComponent } from './components/home/home.component';
import {MenuModule} from "primeng/components/menu/menu";


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        TasksComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        //PrimeNG Modules
        DataListModule,MenuModule,
        //Bootstrap modules
        AlertModule.forRoot(),
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
