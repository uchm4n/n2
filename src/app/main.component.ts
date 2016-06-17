import { Component,OnInit } from '@angular/core'
import { Routes,ROUTER_DIRECTIVES } from '@angular/router'
import {ModelsComponent} from "./components/models/models.component"

@Component({
  moduleId: module.id,
  selector: 'main',
  directives:[ROUTER_DIRECTIVES],
  //providers:[Router],
  templateUrl:'./main.component.html' ,
})

@Routes([
  {path:'/models', component:ModelsComponent}
])
export class MainAppComponent implements OnInit{
  title = 'Main Components works!';


  ngOnInit() {
    console.log('Loaded')
  }

}
