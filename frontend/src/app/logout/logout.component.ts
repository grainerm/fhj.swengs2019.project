import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn;
    this.userService.loggedInChange.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = false;
  }

}
