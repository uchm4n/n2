import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h1>{{title}}</h1>
            <search-box [placeHolder]="'Input Text to Clear'"></search-box>
            <hr>
            <color-picker color="red"></color-picker>
        </div>`,
})
export class AppComponent {
    title = 'App is working Fine!';
}
