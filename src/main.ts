<<<<<<< HEAD
import "./polyfills.ts";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
=======
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { N2bAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
>>>>>>> 0728e06de457b5f238b5f319e7f98e54303455a6

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule);
=======
bootstrap(N2bAppComponent, [
  HTTP_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "zxwzRt67LHxgEYZFvuBtSuViXFxuOMUTP7CSuW3X",
    authDomain: "https://project-5995607935968490987.firebaseio.com",
    databaseURL: "https://project-5995607935968490987.firebaseio.com",
    storageBucket: "",
  })
]);
>>>>>>> 0728e06de457b5f238b5f319e7f98e54303455a6
