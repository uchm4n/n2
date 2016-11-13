import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css'],
  providers:[TodoService]
})
export class TODOComponent implements OnInit {

  tasksList;
  errorMessage;
  constructor(private todo:TodoService) {}


  ngOnInit() {
    this.todo.getTasks().subscribe(
        task => this.tasksList = task,
        error =>  this.errorMessage = <any>error
    );
  }

}
