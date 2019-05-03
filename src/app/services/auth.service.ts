import { Injectable } from '@angular/core';

// import user and router
import { Router } from "@angular/router";
import { UserService } from "./user.service";

// for firebase auth
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import { NotificationService  } from '../services/toastr.service';

// importing db model user
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

// for user handling and storing to db variables
user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  loggedUser;
  dbUser;
  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService,
    private toastService: NotificationService ,
  ) 
  {
    this.user = firebaseAuth.authState;
    this.dbUser = new User();
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        userService
          .isAdmin(this.userDetails.email)
          .snapshotChanges()
          .subscribe(data => {
            data.forEach(el => {
              const y = el.payload.toJSON();
              this.dbUser = y;
            });
          });
      } else {
        this.userDetails = null;
      }
    });
  }

  isLoggedIn(): boolean {
    if (this.userDetails !== null) {
      return true;
    }
  }

  logout() {
    this.loggedUser = null;
    this.firebaseAuth.auth.signOut().then(res => this.router.navigate(["/"]));
          this.toastService.showSuccess("Logout Success", "Logging You Out");

  }

  getLoggedInUser(): User {
    const loggedUser: User = new User();
    const user = this.firebaseAuth.auth.currentUser;

    if (user) {
      this.userDetails = user;
      if (user != null) {
        loggedUser.name = user.displayName;
        loggedUser.email = user.email;
        loggedUser.avatar = user.photoURL;
        loggedUser.isAdmin = this.dbUser["isAdmin"];
      }
    } else {
      this.userDetails = null;
    }

    return loggedUser;
  }

  isAdmin(): boolean {
    const user = this.getLoggedInUser();
    // console.log("loggedUSer", user)
    if (user != null) {
      if (user.isAdmin === true) {
        return true;
      }
    }
  }
  // google login work here
  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}
