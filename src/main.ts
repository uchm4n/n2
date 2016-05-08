import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { GN2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(GN2AppComponent);
