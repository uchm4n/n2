import {Control} from 'angular2/common'

export class UserNameValidator {
    static noSpace(control: Control){
        if(control.value.indexOf(' ') >= 0)
            return { noSpace: true }

        return null;
    }

    static unique(control: Control){
        /*return new Promise((resolve,reject) => {
            setTimeout(function () {
                if (control.value == 'ucha')
                    return {unique: true};
                else
                    resolve(null);
            },1000);
        });*/
    }

}







