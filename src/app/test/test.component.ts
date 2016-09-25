import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    
      <div highlight *ngIf="toggle">This is div which tests Highlights directive </div>
      <button (click)="toggleSwitch()">{{toggleText}}</button>
      <hr>
      
      <ul>
        <li *ngFor="let item of items; let i  = index">
          {{i}} - {{item}}
      
        </li>
      </ul>

  `,
  styles: []
})
export class TestComponent {
  private toggle = true;
  private toggleText = "Hide Button"

  toggleSwitch(){
    this.toggle = !this.toggle
    if(!this.toggle)
      this.toggleText = "Show Button"
    else
      this.toggleText = "Hide Button"
  }

  private items = [343,34534,'345345', '50']

}
