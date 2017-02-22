import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import "hammerjs";
import {AlertModule} from "ng2-bootstrap";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {ButtonModule} from "primeng/components/button/button";
import {MegaMenuModule} from "primeng/components/megamenu/megamenu";
import {MenuComponent} from "./components/menu/menu.component";
import {AppRoutingModule} from "./app.routing";
import {TasksComponent} from "./components/tasks/tasks.component";
import {DataListModule} from "primeng/components/datalist/datalist";


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        TasksComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        //PrimeNG Modules
        CheckboxModule, ButtonModule, MegaMenuModule,DataListModule,
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
