import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h1>{{title}}</h1>
            <hr>
            <color-sample></color-sample>
        </div>`,
})
export class AppComponent {

    title = 'App is working Fine!';


}
