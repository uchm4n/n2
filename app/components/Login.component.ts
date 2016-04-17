import  {Component} from "angular2/core"
import  {Control, ControlGroup, Validators, FormBuilder} from "angular2/common"
import {UserNameValidator} from "../validators/UserNameValidator";


@Component({
    selector: 'login',
    templateUrl: 'app/templates/Login.template.html'
})
export class LoginComponent {
    formG:ControlGroup;

    constructor(fb:FormBuilder) {
        this.formG = fb.group({
            username: ['', Validators.compose([Validators.required,UserNameValidator.noSpace])],
            password: ['', Validators.required]
        });
    }


    /*formG = new ControlGroup({
     username: new Control('',Validators.required),
     password: new Control('',Validators.required)
     });*/

    onLogin() {
        console.log(this.formG.value);
    }

}

