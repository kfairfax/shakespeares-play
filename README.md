# ShakespearesPlay

A personal note from Katrina Fairfax about this project:
The project was generate using Angular's CLI.  The style sheets are written in Sass.  Icons and pagination were provided by Angular-Material UI component library.  There are three components. Reviews componenet displays all of the reviews for Shakespeare's play.  When a user clicks on one of the reviews, they are routed to Review component.  Both of these components contain stars from Stars component that represent a numerical play rating. There are two services, ReviewsService and ReviewService, that fetch data from the provided API endpoints.  A few async, routing, and component unit tests are contained within the various spec.ts files and can be initiated through the Karma test runner by executing the 'ng test' command.


The following challenge instructions were provided:

Shakespeare has been getting a lot of reviews recently about his plays. So far he has managed to build a backend API to serve them, but he doesn’t have the chops to finish out the UI. That’s where you come in, your task is to build a client side app for Shakespeare’s API. The design of the application is up to you.

Authentication is done by passing your API token using the x-api-key header. The value of this header will contain nothing more than just the token value.
Your authentication token is: H3TM28wjL8R4#HTnqk?c

Two endpoints for this API exist: (GET) https://shakespeare.podium.com/api/reviews and (GET) https://shakespeare.podium.com/api/reviews/:id

We've sent the front and back end challenges, please choose one to complete in Github and send your repo back by the end of the week.
We ask that you do not include our name in the project, only your own. 
The challenge is agnostic, so write in any language you feel you can do your best work.
Once you start, please get it back to us within 3 business days.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


