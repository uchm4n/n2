import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input('placeHolder')
  text = "Input Text Here"

  clear(input){
    console.log(input);
    input.value = '';
  }
}
