import {Injectable} from 'angular2/core';
import {Http} from  'angular2/http';

@Injectable()
export class GithubService {

    private userUrl = "https://api.github.com/users/ucha19871";

    constructor(private http: Http){
    }

    getUser() {
        return this.http.get(this.userUrl)
            .map(res => res.json());
    }

    getFolowers(){
        return this.http.get(this.userUrl + '/followers')
            .map(res => res.json());
    }

    
}



