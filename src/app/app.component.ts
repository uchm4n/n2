import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValues: string[] = ['val1','val2'];
  title = 'app works!';
  value: boolean;
  val: number = 3;


  onclick(e) {
    console.log(e)
  }


}
