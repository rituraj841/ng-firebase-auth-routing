import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { User } from '../models/user';

@Injectable()
export class UserService {
  selectedUser: User = new User();
  users: AngularFireList<User>;

  constructor(private angularDB: AngularFireDatabase) {
    this.getUsers();
  }

  getUsers() {
    this.users = this.angularDB.list("dbusers");
    return this.users;
  }

  createUser(data: any) {
    data.isAdmin = false;
    this.users.push(data);
  }

  isAdmin(emailId: string) {
    return this.angularDB.list("dbusers", ref =>
      ref.orderByChild("email").equalTo(emailId)
    );
  }
}
