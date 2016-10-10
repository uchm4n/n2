import {Injectable} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt";

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    // Configure Auth0
    lock = new Auth0Lock('P7AbkHceWkKDgYz9xrr3w7tGlzspYouz', 'uch.auth0.com', {});

    constructor() {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            //Get profile for logged in user
            this.lock.getProfile(authResult.idToken, function (error: any, profile: any) {
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                localStorage.setItem('id_token', authResult.idToken);
            });


        });

    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    };
}
