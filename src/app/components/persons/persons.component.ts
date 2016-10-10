import {Component, OnInit} from "@angular/core";
import {FirebaseService} from "../../services/firebase.service";
import {AngularFire} from "angularfire2";
import {Person} from "../../services/interfaces.service";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
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

    changeState(state, key = null) {
        if (key) {
            this.activeKey = key
        }
        this.appState = state
    }

    filterBY($event, filter) {
        this.fs.getPersons(filter).subscribe(persons => {
            this.persons = persons;
        })
    }

    savePerson(name: string, bio: string, img: string) {
        let newPerson = {
            name: name,
            bio: bio,
            img: img
        }

        this.fs.addPerson(newPerson);
        this.changeState('default')
    }

}
