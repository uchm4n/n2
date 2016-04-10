import {Component} from 'angular2/core';
import {TaskService} from '../services/task.service';
import {AutoGrow} from "../directives/auto-grow.directive";
import {Star} from "./Star.component";
import {Vote} from "./Vote.component";

@Component({
    selector: 'u-app',
    template: `<div (click)="showDetailsClicked()" style="cursor: pointer">Detail Info {{contact.name}} {{contact.familyName}}</div>
    <input autoGrow type="text" [(ngModel)]="contact.name"  > <br>
     <h3>Favorite</h3>
    <star is-empty="!showDetails" (changeSt)="onStarChange($e)"></star><br>
    <vote vote-count="11"></vote>
    <hr>
    <div *ngIf="showDetails">
            <br>
            <span>Name: {{contact.name}}</span><br>
            <span>Family Name: {{contact.familyName}}</span><br>
            <span>Phone: {{contact.phone}}</span><br>
            
            <h1>Tasks:</h1>
            <ul>
                <li *ngFor="#task of tasks">{{task}}</li>
            </ul>            
            
            
        </div>`,
    providers: [TaskService],
    directives:[AutoGrow,Star,Vote]
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
