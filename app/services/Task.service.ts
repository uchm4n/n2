import {Injectable} from 'angular2/core';
import {Http} from  'angular2/http';
import {Task} from './Task.service';
import {Observable} from "rxjs/Observable";
//import 'rxjs/add/operator/map';
@Injectable()
export class TaskService {

    private url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private http: Http){
    }

    getTasks() : Observable <Task[]> {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    createTask(task: Task){
        return this.http.post(this.url,JSON.stringify(task))
            .map(res => res.json());
    }
    
    getTask(id) {
        return this.http.get(this.url + '/' +id)
            .map(res => res.json());
    }

}

export interface Task {
    id?:number;
    userId:number;
    title:string;
    body:string;
}

