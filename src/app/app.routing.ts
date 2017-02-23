import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {TasksComponent} from "./components/tasks/tasks.component";
import {HomeComponent} from "./components/home/home.component";


const appRoutes: Routes = [
    { path: 'home' , component: HomeComponent },
    { path: 'tasks', component: TasksComponent },
    // { path: '*', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}