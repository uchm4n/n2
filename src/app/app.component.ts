import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Georgian Realestate';
  input = "This  is input placehoder";
  isDisplayable = true


  @Input() updating;

  onUpdating(e){
    console.log(e)
  }

}
