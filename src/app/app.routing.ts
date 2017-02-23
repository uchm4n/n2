import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {TasksComponent} from "./components/tasks/tasks.component";
import {HomeComponent} from "./components/home/home.component";
import {Error404Component} from "./components/error404/error404.component";
import {AdminComponent} from "./components/admin/admin.component";
import {AuthGuard} from "./services/auth-guard.service";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {LoginComponent} from "./components/login/login.component";


const appRoutes: Routes = [

    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    {path: 'home', component: HomeComponent},
                    {path: 'tasks', component: TasksComponent},
                    {path: '', component: AdminDashboardComponent}
                ],
            }
        ]
    },

    {path: '', component: LoginComponent},
    {path: '**', component: Error404Component},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}