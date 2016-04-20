import  {Component, Inject} from "angular2/core"
import {Router} from "angular2/router";


@Component({
    selector: 'contact-as',
    templateUrl: 'app/templates/ContactAs.template.html',
})

export class ContactAsComponent {

    constructor(@Inject(Router) private router: Router){
    }

    onSubmit(){
        this.router.navigate(['Home']);
    }

}

