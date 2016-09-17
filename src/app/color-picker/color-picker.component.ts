import {Component, EventEmitter} from '@angular/core';
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  @Input()
  color:string

  @Output("color")
  colorOutput = new EventEmitter();

  choose(color:string){
    this.colorOutput.emit(color);
  }
}
