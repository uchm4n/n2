import { Component } from '@angular/core';
import { TaskComponent } from './task';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'g-n2-app',
  templateUrl: 'g-n2.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/task', component: TaskComponent}
])
export class GN2AppComponent {
  title = 'Works!';
}
