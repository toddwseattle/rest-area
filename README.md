# RESTArea

The RESTArea provides a rest API UI with the ability to set parameters and headers; and view the JSON response as well as headers and other information.  After getting a response, with a click of a button, the RESTArea will generate a set of typescript interfaces based on the JSON response. These can then be used with client libraries, like the Angular HttpClient.

It is hosted and you can demo / use it at: 
[https://rest-area.firebaseapp.com](https://rest-area.firebaseapp.com)

![demo gif](/src/assets/images/RESTAreaGetIntro020818.gif)

Special thanks to a couple of components that made building this easier:
- [angular2-prettyjson](https://github.com/matiboy/angular2-prettyjson) by [matiboy](https://github.com/matiboy)
- [ngx-clipboard](https://github.com/maxisam/ngx-clipboard) by [maxisam](http://maxisam.github.io/)

Contributions are welcome.  Check the issues list or the [story backlog project](https://github.com/toddwseattle/rest-area/projects/1) for things to add.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
