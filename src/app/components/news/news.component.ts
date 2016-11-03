import {Component, OnInit} from "@angular/core";
import {NewsService} from "../../services/news.service";

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
    providers:[NewsService]
})
export class NewsComponent implements OnInit {
    newsList;
    errorMessage;

    constructor(private news: NewsService) {}

    ngOnInit() {
        this.news.getNews().subscribe(
            news => this.newsList = news,
            error =>  this.errorMessage = <any>error
        );
    }

}
