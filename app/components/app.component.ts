import {Component} from 'angular2/core';

@Component({
    selector: 'u-app',
    template: `<div (click)="showDetailsClicked()" style="cursor: pointer">
                Detail Info {{contact.name}} {{contact.familyName}}
                </div>
    <input type="text" [(ngModel)]="contact.name">
        <div *ngIf="showDetails">
            <br>
            <span>Name: {{contact.name}}</span><br>
            <span>Family Name: {{contact.familyName}}</span><br>
            <span>Phone: {{contact.phone}}</span><br>
        </div>`
})
export class AppComponent {
    public contact = {
        name:'Ucha',
        familyName:'Chilach',
        phone:'555 555 555'
    };
    public showDetails = false;

    showDetailsClicked(){
        this.showDetails = !this.showDetails;
    }
}
