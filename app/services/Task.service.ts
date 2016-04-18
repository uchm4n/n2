import {Injectable} from 'angular2/core';
import {Http} from  'angular2/http';
//import 'rxjs/add/operator/map';
@Injectable()
export class TaskService {

    private url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private http: Http){
    }

    getTasks() {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    createTask(post){
        return this.http.post(this.url,JSON.stringify(post))
            .map(res => res.json());
    }

}



