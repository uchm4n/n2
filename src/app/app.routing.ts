import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from "./test/test.component";
import {AboutComponent} from "./about/about.component";

const appRoutes: Routes = [
  {path: '', component: TestComponent},
  {path: 'about/:name', component: AboutComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
