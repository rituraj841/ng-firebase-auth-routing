import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routes} from '@angular/router';
export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent,canActivate :[AuthGuardService] },
    { path: 'login', component: LoginComponent },
]