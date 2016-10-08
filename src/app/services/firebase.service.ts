import { Injectable } from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";


export interface Person{
  $key?:string;
  bio:string;
  image:string;
  name:string;
}


@Injectable()
export class FirebaseService {

  persons:FirebaseListObservable<Person[]>;
  constructor(private af:AngularFire) {
  }

  getPersons(){
    this.persons = this.af.database.list('/persons');
    return this.persons;
  }
}
