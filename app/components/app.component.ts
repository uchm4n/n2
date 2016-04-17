import {Component} from 'angular2/core';
import {TaskService} from '../services/task.service';
import {AutoGrow} from "../directives/auto-grow.directive";
import {Star} from "./Star.component";
import {Vote} from "./Vote.component";
import {ContactFormComponent} from "./contact-form.component";

@Component({
    selector: 'u-app',
    templateUrl: '/app/templates/Main.template.html',
    providers: [TaskService],
    directives:[AutoGrow,Star,Vote,ContactFormComponent]
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
