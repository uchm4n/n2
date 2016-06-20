import {Component} from '@angular/core';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {PersonComponent} from "./person/person.component";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';


@Component({
  moduleId: module.id,
  selector: 'n2b-app',
  templateUrl: 'n2b.component.html',
  styles: [`md-sidenav-layout { background: rgba(0,0,0,0.08); }`],
  directives: [
    MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES,
    MdIcon, ROUTER_DIRECTIVES, PersonComponent
  ],
  providers: [ROUTER_PROVIDERS, MdIconRegistry],
})

@RouteConfig([
  {path: '/person', component: PersonComponent, useAsDefault: true}
])
export class N2bAppComponent {
  title = 'n2b works!';
  views:Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment_ind"
    },
    {
      name: "Potential dates",
      description: "Find your soulmate!",
      icon: "pets"
    }
  ];
}
