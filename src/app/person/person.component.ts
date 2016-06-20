import {Component, OnInit} from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {AngularFire, FirebaseListObservable} from "angularfire2";


@Component({
  moduleId: module.id,
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css'],
  directives: [
    MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon, MD_INPUT_DIRECTIVES
  ],
  providers: [MdIconRegistry]
})
export class PersonComponent implements OnInit {
  persons:FirebaseListObservable<any>;

  constructor(af:AngularFire) {
    this.persons = af.database.list('persons');
  }

  ngOnInit() {
  }

  postPerson(val){
    this.persons.push(val);
    val = '';
  }
}
