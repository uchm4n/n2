import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`.sebm-google-map-container { height: 300px; }`]
})
export class HomeComponent  {
  
  lat: number = 41.7151;
  lng: number = 44.8271;
  
}
