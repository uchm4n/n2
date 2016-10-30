import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ContentComponent} from "./components/content/content.component";
import {FormtestComponent} from "./components/formtest/formtest.component";
import {AuthGuard} from "./auth.guard";

const appRoutes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'formtest', component: FormtestComponent, canActivate: [AuthGuard]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
