import  {Component,OnInit} from "angular2/core"
import {GithubService} from "../services/Github.service"
import {Observable} from 'rxjs/Observable';

@Component({
    selector:'github',
    templateUrl:'app/templates/GitHub.template.html',
    providers:[GithubService]
})
export class GithubComponent implements OnInit{
    public user = {};
    public followers;

    constructor(private githubService:GithubService){
    }

    ngOnInit(){
        /*this.githubService.getUser().subscribe( user => {
            this.user = user;
        })
        
        this.githubService.getFolowers().subscribe(res => {
            this.followers = res;
        })*/

        Observable.forkJoin(
            this.githubService.getUser(),
            this.githubService.getFolowers()
        ).subscribe(res => {
            this.user =res[0],
            this.followers = res[1]
        });
    }




}

