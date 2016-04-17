import {Component} from 'angular2/core';
import {AutoGrow} from "../directives/auto-grow.directive";
import {Star} from "./Star.component";
import {Vote} from "./Vote.component";
import {LoginComponent} from "./Login.component";
import {TaskService} from "../services/Task.service";
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'u-app',
    templateUrl: '/app/templates/Main.template.html',
    providers: [TaskService,HTTP_PROVIDERS],
    directives:[AutoGrow,Star,Vote,LoginComponent]
})
export class AppComponent {
    tasks;
    constructor(tasksService:TaskService){
        this.tasks = tasksService.getTasks();
    }


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
