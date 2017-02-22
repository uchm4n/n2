import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/components/common/api";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

    constructor() {
    }

    private items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Home', icon: 'fa-home',
                items: [
                    [
                        {
                            label: 'Main Page',
                            items: [{label: 'Main Page 1',url:'http://www.google.com'}, {label: 'Main Page 2'}]
                        },
                        {
                            label: 'TV 2',
                            items: [{label: 'TV 2.1'}, {label: 'TV 2.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'List', icon: 'fa-list',
                items: [
                    [
                        {
                            label: 'List 1',
                            items: [{label: 'List 1.1'}, {label: 'List 1.2'}]
                        },
                        {
                            label: 'List 2',
                            items: [{label: 'List 2.1'}, {label: 'List 2.2'}]
                        },

                    ]
                ]
            }
        ];
    }

}
