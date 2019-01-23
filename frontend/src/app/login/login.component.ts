import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any;

  constructor(private toastrService: ToastrService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }

  login() {
    this.userService.login(this.user)
      .subscribe((res: any) => {
      }, (error) => {
          this.toastrService.error('wrong username or password', 'NONONO');
      });
  }
}
