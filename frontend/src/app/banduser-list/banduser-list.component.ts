import { Component, OnInit } from '@angular/core';
import {User} from '../api/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {Actor} from '../api/actor';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-banduser-list',
  templateUrl: './banduser-list.component.html',
  styleUrls: ['./banduser-list.component.scss']
})
export class BanduserListComponent implements OnInit {

  users: Array<User>;

  constructor(private toastrService: ToastrService, private userService: UserService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    const data = this.route.snapshot.data;
    this.users = data.users;
  }

  deleteUser(user: User) {

    this.userService.delete(user)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

  createUser() {
    this.router.navigate(['/banduser-form']);
  }

  editUser(id) {
    this.router.navigate(['/banduser-form/' + id]).then(success => {
      console.log(success);
    }, error => {
      this.toastrService.error('This is not possible :(');
    });
  }

}
