import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { N2bAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(N2bAppComponent);
