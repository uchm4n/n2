import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h1>{{title}}</h1>
            <search-box [placeHolder]="'Input Text to Clear'"></search-box>
            <hr>
            <color-picker #picker color="red" (color)="onColor($event)"></color-picker>
            <button class="btn btn-default center-block" (click)="picker.reset()">Reset</button>
        </div>`,
})
export class AppComponent {

    title = 'App is working Fine!';

    onColor(color){
        console.log(color);
    }


}
