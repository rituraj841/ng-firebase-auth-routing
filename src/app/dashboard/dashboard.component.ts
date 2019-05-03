import { User } from './../models/user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedUser: User;
  constructor(private authService: AuthService) {}

  ngOnInit() {
		this.loggedUser = this.authService.getLoggedInUser();
	}

}
