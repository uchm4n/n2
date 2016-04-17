import {Injectable} from 'angular2/core';
import {Http} from  'angular2/http';
import 'rxjs/add/operator/map';
@Injectable()
export class TaskService {

    constructor(private http: Http){
    }

    getTasks() {
        var tasks = this.http.get("http://jsonplaceholder.typicode.com/posts")
            .map(res => res.json());
        console.log(tasks);
    }

}



