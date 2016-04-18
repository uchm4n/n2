import  {Component,OnInit} from "angular2/core"
import {TaskService} from "../services/Task.service";



@Component({
    selector:'tasks',
    templateUrl:'app/templates/Tasks.template.html',
    providers:[TaskService]
})
export class Tasks implements OnInit{
    public tasksData;
    public commentsData;
    public createAt = new Date();

    constructor(private tasks:TaskService){
    }

    ngOnInit(){
        this.tasks.getTasks().subscribe( tasks => {
            this.tasksData = tasks;
        })
    }




}

