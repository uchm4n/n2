import {Component, OnInit} from "@angular/core";
import {TaskService} from "../../services/task.service";
import {Task} from "../../../shared/Task";


@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css'],
    providers: [TaskService]
})
export class TasksComponent implements OnInit {

    tasks:Task[];

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        return this.taskService.getTasks().subscribe(
            tasks => this.tasks = tasks, //Bind to view
            err => {
                console.log(err);
            }
        );
    }

}
