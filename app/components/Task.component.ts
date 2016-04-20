import  {Component, OnInit} from "angular2/core"
import {TaskService} from "../services/Task.service";
import {RouteParams} from "angular2/router";



@Component({
    selector:'task',
    templateUrl:'app/templates/Task.template.html',
    providers:[TaskService]
})

export class TaskComponent implements OnInit{
    public taskData = {};
    private isLoading = true;

    constructor(
        private taskService:TaskService,
        //@Inject(RouteParams) params: RouteParams
        private params: RouteParams
    ) {

    }

    ngOnInit() {
        this.taskService.getTask(this.params.get("id"))
            .subscribe(task => {
                this.isLoading = false;
                this.taskData = task;
            })
    }




}

