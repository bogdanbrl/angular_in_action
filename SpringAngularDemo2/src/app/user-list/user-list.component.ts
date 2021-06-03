import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usersUrl = 'http://localhost:8080/users';
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers(this.usersUrl).subscribe(data => {
      this.users = data;
    });
  }
}
