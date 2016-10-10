import {Component} from "@angular/core";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-profile',
    template: `
    <p>This is {{profile.nickname}}'s profile</p>
    <div>
      <p><img src="{{profile.picture}}" alt="" width="150"></p>
      <p>Email:{{profile.email}}</p>
      <p></p>
    </div>
    
    
  `,
    styles: []
})
export class ProfileComponent {
    profile;

    constructor(private auth: AuthService) {
        this.profile = JSON.parse(localStorage.getItem('profile'));
    }

}
