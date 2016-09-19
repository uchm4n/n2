import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  @Output()
  clicked = new EventEmitter<string>();

  onClicked(){
      this.clicked.emit('It Works');
  }
}
