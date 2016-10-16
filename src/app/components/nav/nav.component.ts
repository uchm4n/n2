import { Component, OnInit } from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {ViewChild} from "@angular/core/src/metadata/di";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('childModal') public childModal:ModalDirective;
  
  public showChildModal():void {
    this.childModal.show();
  }
  
  public hideChildModal():void {
    this.childModal.hide();
  }
}
