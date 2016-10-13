import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'app-formtest',
    templateUrl: './formtest.component.html',
    styles: []
})
export class FormtestComponent implements OnInit {

    form: FormGroup;

    constructor(public fb:FormBuilder) {
        this.form = this.fb.group({
            email:['',Validators.required],
            bio:['',Validators.required],
            image:['',Validators.required],
        })
    }

    ngOnInit() {
    }


    public x:number = 5;
    public y:number = 2;
    public max:number = 10;
    public rate:number = 0;
    public isReadonly:boolean = false;
    public overStar:number;
    public percent:number;
    public ratingStates:any = [
        {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
        {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
        {stateOn: 'glyphicon-heart'},
        {stateOff: 'glyphicon-off'}
    ];

    public hoveringOver(value:number):void {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };

    public resetStar():void {
        this.overStar = void 0;
    }

    public onClick():void {
        if(!this.isReadonly){
            this.isReadonly = true;
            console.log(this.rate)
        }
    }


}
