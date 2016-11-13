import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ContentComponent} from "./components/content/content.component";
import {FormtestComponent} from "./components/formtest/formtest.component";
import {AuthGuard} from "./auth.guard";
import {NewsComponent} from "./components/news/news.component";
import {TODOComponent} from "./components/todo/todo.component";

const appRoutes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'formtest', component: FormtestComponent, canActivate: [AuthGuard]},
    {path: 'todo', component: TODOComponent, canActivate: [AuthGuard]},
    {path: 'news', component: NewsComponent},
    {path: '**', redirectTo: ''}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
