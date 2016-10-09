import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Err404Component} from "./components/err404/err404.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AuthGuard} from "./auth.guard";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {PersonsComponent} from "./components/persons/persons.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
    {path: 'about', component: AboutComponent},
    {path: 'persons', component: PersonsComponent},
    {path: '**', component:Err404Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
