import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ContentComponent} from "./components/content/content.component";
import {AuthGuard} from "./auth.guard";

const appRoutes: Routes = [
  {path: '', component: ContentComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
