import  {Component,OnInit} from "angular2/core"
import {TaskService} from "../services/Task.service";
import {Vote} from "./Vote.component";
import {Star} from "./Star.component";



@Component({
    selector:'tasks',
    templateUrl:'app/templates/Tasks.template.html',
    providers:[TaskService],
    directives:[Vote,Star]
})
export class TasksComponent implements OnInit{
    public tasksData;
    public commentsData;
    public createAt = new Date();
    private isLoading = true;

    constructor(private taskService:TaskService) {
        this.taskService.createTask({
            userId: 101,
            title: 'dfsdf',
            body: 'asdasdas',
        });
    }

    ngOnInit(){
        this.taskService.getTasks().subscribe( tasks => {
            this.isLoading = false;
            this.tasksData = tasks;
            console.log(tasks[0].title);
        })
    }




}

