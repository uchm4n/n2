import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { RouteConfig , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { DogsComponent } from './+dogs';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'g-n2.component.html',
  directives: [
    MdIcon,ROUTER_DIRECTIVES,MD_CARD_DIRECTIVES,MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,MD_SIDENAV_DIRECTIVES,MD_LIST_DIRECTIVES
  ],
  providers: [ ROUTER_PROVIDERS,MdIconRegistry ]
})
@RouteConfig([
  {path:'/dogs',component:DogsComponent,useAsDefault:true}
])
export class GN2AppComponent {
  title = 'Works!';
  views: Object[] = [
    {
      name : "Changa",
      description : "My First dog",

    }
  ]
}
