import {Component} from 'angular2/core';
import {AutoGrow} from "../directives/auto-grow.directive";
import {Star} from "./Star.component";
import {Vote} from "./Vote.component";
import {LoginComponent} from "./Login.component";
import {HTTP_PROVIDERS} from 'angular2/http';
import {TasksComponent} from "./Tasks.component";
import {GithubComponent} from "./Github.component";
import {TaskService} from "../services/Task.service";
import {GithubService} from "../services/Github.service";
import  {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {TaskComponent} from "./Task.component";

@RouteConfig([
    {path:'/home',name:'Home',component:TasksComponent,useAsDefault:true},
    {path:'/github',name:'GitHub', component:GithubComponent},
    {path:'/tasks/:id',name:'Task', component:TaskComponent},
    {path:'/*other',name:'Other', redirectTo:['Home']}
])

@Component({
    selector: 'u-app',
    templateUrl: '/app/templates/Main.template.html',
    providers: [TaskService,GithubService,HTTP_PROVIDERS],
    directives:[AutoGrow,Star,Vote,LoginComponent,TasksComponent,GithubComponent,RouterOutlet,RouterLink]
})
export class AppComponent {

    public contact = {
        name:'Ucha',
        familyName:'Chilach',
        phone:'555 555 555'
    };
    public showDetails = false;

    showDetailsClicked(){
        this.showDetails = !this.showDetails;
    }

    onStarChange($e){
        console.log($e);
    }

}
