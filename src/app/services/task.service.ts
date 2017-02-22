import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Task} from "../../shared/Task";
import {Observable} from "rxjs";
import {Config} from "../app.config";

@Injectable()
export class TaskService {

    constructor(private http: Http) {}

    getTasks() : Observable<Task[]>{
        return this.http
            .get(Config.API_ENDPOINT + '/posts')
            .map((res:Response) => res.json())
            // .map(response => response.json().data as Task[])
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }
}
