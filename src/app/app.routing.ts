import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from "./test/test.component";
import {AboutComponent} from "./about/about.component";
import {Err404Component} from "./err404/err404.component";
import {ProfileComponent} from "./profile/profile.component";

const appRoutes: Routes = [
    {path: '', component: TestComponent},
    {path: 'about/:name', component: AboutComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', component:Err404Component }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
