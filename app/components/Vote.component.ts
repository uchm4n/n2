import  {Component,Input} from "angular2/core"


@Component({
    selector:'vote',
    templateUrl:'app/templates/Vote.template.html',
    styles:[`.activeOr{ color:orange; }`]
})
export class Vote{
    count:number = 10;
    @Input() vote:number = 0;
    

    onUp():number{
        if(this.vote == 1)
            return;

        this.vote += 1;
    }
    onDown():number{
        if(this.vote == -1)
            return;

        this.vote -= 1;
    }



}

