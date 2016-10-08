import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2";
import {FirebaseService, Person} from "../services/firebase.service";

@Component({
  selector: 'app-about',
  template: `
  <div>
  <ul>
    <li class="text" *ngFor="let person of persons ">
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
  styles: [],
  providers:[FirebaseService]
})
export class AboutComponent implements  OnDestroy,OnInit{

  name: string;
  private subscription:Subscription;
  persons: Person[];
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute,af: AngularFire,private fs:FirebaseService) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.name = param['name']
    );
  }

  ngOnInit(){
    this.fs.getPersons().subscribe(persons => {
      this.persons = persons
    })
    console.log(this.persons)
  }
  onNavigate(){
    this.router.navigate(['/'],{queryParams:{"some" : 100}})
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
