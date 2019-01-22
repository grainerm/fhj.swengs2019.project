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
  public bandUserFormid: boolean;

  constructor(private toastrService: ToastrService, private userService: UserService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    /*this.users = this.userService.getAll(this.users);

    const data = this.route.snapshot.data;
    this.users = data.users._embedded.users;
    console.log(this.users);*/
    this.userService.getAll().subscribe((response: any) => {
      this.users = response._embedded.users;
    });

    this.bandUserFormid = false;
  }

  deleteUser(user: User) {

    this.userService.delete(user)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

  createUser() {
    this.bandUserFormid = false;
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
