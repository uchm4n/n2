import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div>
    <h4>My Location</h4>
    <p>This is my location on the map</p>
    <sebm-google-map [latitude]="lat" [longitude]="lng">
      <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
    </sebm-google-map>
  </div>
  `,
  styles: [`.sebm-google-map-container { height: 300px; }`]
})
export class AboutComponent{

  name: string;
  lat: number = 41.7151;
  lng: number = 44.8271;
  
  constructor() {
  }

}
