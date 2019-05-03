# Angular Firebase Google Login with user detail stored in databse.

## Functionalities
1.User Login using Google Account.
2.User Dashboard for Logged In User Information.
3.IsAdmin module to show hide components using UserLoggedin Status.
4.Auth Guard Service for Blocking certain Routes with CanActivate.
5.Toastr Service for Tasty notifications.
6.User Model for user Db Information.
7.Angular Routing for Routing between components using Routing modules.

# Installation

1.  Angular CLI
    - [Download Angular CLI](https://cli.angular.io/)
2.  NodeJs
    - [Download Nodejs](https://nodejs.org/en/download/)
3.  Package Manager - NPM / Yarn
4.  Clone the repository and run `npm install` if you use **npm** as package manager or `yarn install` if you use **yarn** as package manager.
5.  Angular + Firebase Tutorial - [Angular + Firebase + Typescript — Step by step tutorial](https://        medium.com/factory-mind/angular-firebase-typescript-step-by-step-tutorial-2ef887fc7d71)
6.  Activate Firebase Authentication Providers

    `Authentication -> Sign-in-method -> Enable Email/Password & Google provider`

7.  Update the Firebase Database Rules

    `Database -> Rules`

    ```
    {
    "rules": {
        ".read":true,
        ".write": true
    }
    }
    ```

8.  Configure your firebase configuration `src/environments`

    ```
    export const FireBaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        databaseURL: "YOUR_DATABASE_URL",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_SENDER_ID"
    };
    ```

9.  For Admin Role `Register or SignIn with Google Auth`
    change isAdmin: false      <--- Change this to true in your firebase db.

10. Run the Server using ng serve --open.           

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
