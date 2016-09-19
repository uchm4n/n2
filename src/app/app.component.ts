import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h1>{{title}}</h1>
            <hr>
            <app-tabs (clicked)="onClicked($event)"></app-tabs>
        </div>`,
})
export class AppComponent {

    title = 'App is working Fine!';

    onClicked(e:string){
        console.log(e)
    }

}
