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
                label: 'Main',
                icon: 'fa-home',
                items: [
                    {label: 'Home',icon: 'fa-home', url:'home'},
                    {label: 'Tasks',icon: 'fa-list-ul', url:'tasks'},
                ]
            },
            {
                label: 'Settings',
                items: [
                    { label: 'Users', icon: 'fa-users'},
                    { label: 'Roles', icon: 'fa-address-card'},
                    { label: 'Permissions', icon: 'fa-address-book'},
                ]
            }
        ];
    }

}
