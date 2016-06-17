/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
<<<<<<< HEAD
  '@angular2-material': 'vendor/@angular2-material'
=======
>>>>>>> 90728a8d5c67dc28d6a6d815cf4c13af580eed2d
};

/** User packages configuration. */
const packages: any = {
};

<<<<<<< HEAD
// put the names of any of your Material components here
const materialPkgs:string[] = ['core','button','card','toolbar','icon','input','sidenav','list'];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});

=======
>>>>>>> 90728a8d5c67dc28d6a6d815cf4c13af580eed2d
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
<<<<<<< HEAD
  'app/+dogs',
=======
  'app/task',
  'app/components/task',
  'app/service',
  'app/models',
  'app/components/models',
  'app/components/model',
  'app/+models',
  'app/components/filters',
>>>>>>> 90728a8d5c67dc28d6a6d815cf4c13af580eed2d
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
