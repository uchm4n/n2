import {Component, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-about',
  template: `
  <div>
  <ul>
    <li class="text" *ngFor="let person of persons | async">
      {{person.name}}
    </li>
  </ul>
    <hr>
    <p>
        About US!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis facere perferendis quia sed voluptates. 
        Aspernatur corporis cum cupiditate dicta facilis, hic nulla odit optio quam quas repellat rerum soluta.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, autem culpa delectus dolor dolore eum in nesciunt nisi sapiente ut vero, voluptatibus? 
        Cupiditate deserunt ea obcaecati, quam quos ratione soluta.
    </p>
    <p>Your name IS: {{name}}</p>
    <p><button class="btn btn-default" (click)="onNavigate()">Home</button></p>
  </div>
  `,
  styles: []
})
export class AboutComponent implements  OnDestroy{

  name: string;
  private subscription:Subscription;
  persons: FirebaseListObservable<any>;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute,af: AngularFire) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.name = param['name']
    );
  
    this.persons = af.database.list('/persons');
    console.log(this.persons)
  }

  onNavigate(){
    this.router.navigate(['/'],{queryParams:{"some" : 100}})
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
