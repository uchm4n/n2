import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {TODO} from "../shared/todo";
import {Observable} from "rxjs";

@Injectable()
export class TodoService {

    private todoUrl = 'http://api.local/v1/';  // URL to web API
    private token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEwLCJpc3MiOiJodHRwOlwvXC9hcGkubG9jYWxcL3YxXC9hdXRoIiwiaWF0IjoxNDc5MDY4OTk3LCJleHAiOjE0NzkwODMzOTcsIm5iZiI6MTQ3OTA2ODk5NywianRpIjoiODYyMDI3ZjIwNjM1OTE4OTVkMTU3MmUxNDNjODliZTYifQ.Y26-UGIVjIEmMdwAyXXSDvLkuwDO6Vc69EsMyknlMmM';
    private options;

    constructor(private http: Http) {
        let headers = new Headers({'Accept': 'application/json'});
        headers.append('Authorization', `Bearer ${this.token}`);
        this.options = new RequestOptions({headers: headers});
    }


    getTasks(): Observable<TODO[]> {
        return this.http.get(this.todoUrl + 'task', this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }


    updateTask(task): Observable<TODO[]>  {
        console.log(task)
        return this.http.put(this.todoUrl + 'task/update/' + task.id, JSON.stringify(task), this.options)
            .map(res => res.json());
    }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }


    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
