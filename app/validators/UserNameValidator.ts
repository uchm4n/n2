import {Control} from 'angular2/common'

export class UserNameValidator {
    static noSpace(control: Control){
        if(control.value.indexOf(' ') >= 0)
            return { noSpace: true }

        return null;
    }
}







