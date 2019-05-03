import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { AppRoutes } from './app.routing'; //Routing from app.routing.ts
import { ToastrModule } from 'ngx-toastr';//for notifications
// firebase auth imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from '../environments/environment';//ffor firebase credentials.

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),// Importing Routes from app.routing.ts
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    // Firebase Import Defns.
    AngularFireModule.initializeApp(environment.firebase),//firebase api path
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,

  ],
  providers: [
    AuthService,
    UserService,
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
