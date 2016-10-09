import {Component, OnInit} from '@angular/core';
import {FirebaseService, Person} from "../../services/firebase.service";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-persons',
  template: `
    <div>
    
      <md-card *ngIf="appState == 'default'">
        <button md-raised-button (click)="changeState('add')">Add</button>

        <label for="filt">Filter By:</label>
        <select id="filt" #filter (change)="filterBY($event,filter.value)">
          <option value="" selected>Select A Filter</option>
          <option value="name">Name</option>
          <option value="bio">Bio</option>
        </select>
      </md-card>
    
      <md-card *ngIf="appState == 'extend'">
        <table>
          <div *ngFor="let person of persons">
            <div *ngIf="activeKey == person.$key">
              <tr>
                  <td class="title">Name: </td>
                  <td class="text">{{person.name}}</td>
              </tr>
              <tr>
                  <td class="title">Biography: </td>
                  <td class="text">{{person.bio}}</td>
              </tr>
              <tr>
                  <td class="title">Image: </td>
                  <td class="text"><img src="{{person.image}}" alt="" width="50"></td>
              </tr>
            </div>
          </div>
        </table>
        <br>
        <button md-raised-button (click)="changeState('default')">Go Back</button>
      </md-card>
      <md-card>
        <md-list class="app-list">
          <md-list-item class="app-list-item" *ngFor="let person of persons">
            <h4 md-line>{{person.name}}</h4>
            <button md-raised-button (click)="changeState('extend',person.$key)">More</button>
            <button md-raised-button color="primary">Edit</button>
            <button md-raised-button color="warn">Delete</button>
          </md-list-item>
        </md-list>
      </md-card>
    </div>
  `,
  styles: [],
  providers: [FirebaseService]
})
export class PersonsComponent implements OnInit {
  persons: Person[];
  appState: string;
  activeKey: string;
  
  constructor(af: AngularFire, private fs: FirebaseService) {
  }
  
  ngOnInit() {
    this.appState = 'default';
    this.fs.getPersons().subscribe(persons => {
      this.persons = persons
    })
  }
  
  changeState(state, key) {
    if (key) {
      this.activeKey = key
    }
    this.appState = state
  }
  
  filterBY($event,filter){
    this.fs.getPersons(filter).subscribe(persons => {
      this.persons = persons;
    })
  }
  
}
