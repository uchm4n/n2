import  {Component,Input,Output,EventEmitter} from "angular2/core"


@Component({
    selector:'star',
    templateUrl:'app/templates/Star.template.html'
})
export class Star{
    @Input('is-empty') isEmpty = true;

    @Output() changeSt= new EventEmitter();

    toggleStar(){
        this.isEmpty = !this.isEmpty;
        this.changeSt.emit({changeSt:this.isEmpty});
    }
    
}

