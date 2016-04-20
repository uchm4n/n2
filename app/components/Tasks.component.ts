import  {Component,OnInit} from "angular2/core"
import {TaskService} from "../services/Task.service";
import {Vote} from "./Vote.component";
import {Star} from "./Star.component";
import { ROUTER_DIRECTIVES} from "angular2/router";



@Component({
    selector:'tasks',
    templateUrl:'app/templates/Tasks.template.html',
    providers:[TaskService],
    directives:[Vote,Star,ROUTER_DIRECTIVES]
})
export class TasksComponent implements OnInit{
    public tasksData;
    public createAt = new Date();
    private isLoading = true;

    constructor(private taskService:TaskService) {
    }

    ngOnInit(){
        this.taskService.getTasks().subscribe( tasks => {
            this.isLoading = false;
            this.tasksData = tasks;
        })
    }




}

