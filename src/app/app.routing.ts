import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from "./components/test/test.component";
import {Err404Component} from "./components/err404/err404.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AuthGuard} from "./auth.guard";

const appRoutes: Routes = [
    {path: '', component: TestComponent},
    {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
    {path: '**', component:Err404Component }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
