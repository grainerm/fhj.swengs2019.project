import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  isLoggedIn: boolean;
  isAdmin: boolean;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.isAdmin = this.userService.getRole();
    this.isLoggedIn = this.userService.isLoggedIn;
    this.userService.loggedInChange.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.userService.isAdminChange.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = false;
  }

  navLogin() {
    this.router.navigate(['/login']);
  }

  navHome() {
    this.router.navigate(['/home']);
  }
}

