import {Injectable} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Person} from "./interfaces.service";


@Injectable()
export class FirebaseService {

    persons: FirebaseListObservable<Person[]>;

    constructor(private af: AngularFire) {
    }

    getPersons(filter = null) {
        if (filter != null) {
            this.persons = this.af.database.list('/persons', {
                query: {
                    orderByChild: filter
                }
            });
        } else {
            this.persons = this.af.database.list('/persons', {
                query: {
                    orderByKey: true,
                }
            });
        }
        return this.persons;
    }

    addPerson(newPerson) {
        this.persons.push(newPerson);
    }

}
