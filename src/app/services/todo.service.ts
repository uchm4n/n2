import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {TODO} from "../shared/todo";
import {Observable} from "rxjs";

@Injectable()
export class TodoService {

  private todoUrl = 'http://api.local/v1/task';  // URL to web API
  private token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2FwaS5sb2NhbFwvdjFcL2F1dGgiLCJpYXQiOjE0NzkwNTM1NDEsImV4cCI6MTQ3OTA2NDM0MSwibmJmIjoxNDc5MDUzNTQxLCJqdGkiOiIzNjcxNDkzY2Q1ZGIzOGRmMjY3MzlmMzJkNjdhOTE4OCJ9.ljXj2QsjDoj_u8lfk9XYMaC1SkRU6P-GtNzauT3S54M';
  constructor (private http: Http) {}


  getTasks(): Observable<TODO[]> {
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', `Bearer ${this.token}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.todoUrl,options)
        .map(this.extractData)
        .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }


  private handleError (error: Response | any) {
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
