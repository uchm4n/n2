import {Injectable} from "@angular/core";


@Injectable()
export class AuthService {

    signInWithPassword(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    signInWithGoogle() {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        return firebase.auth().signInWithPopup(provider).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    signOut() {
        firebase.auth().signOut().then(() => {
            console.log('Sign-out successful.')
            this.isAuthenticated();
        }, function (error) {
            console.log('An error happened.', error.message)
        })
    }

    isAuthenticated() {
        let user = firebase.auth().currentUser;
        if (user) {
            return true;
        } else {
            return false;
        }
    }


}
