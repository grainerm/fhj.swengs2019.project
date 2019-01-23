import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BandService} from '../service/band.service';
import {BanduserService} from '../service/banduser.service';
import {User} from '../api/user';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-banduser-form',
  templateUrl: './banduser-form.component.html',
  styleUrls: ['./banduser-form.component.scss']
})
export class BanduserFormComponent implements OnInit {

  bandForm;
  shouldNavigateToList: boolean;
  userForm;
  bandOptions;
  newBand: boolean;
  isEditUser;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private bandUserService: BanduserService,
              private toastr: ToastrService) { }

  ngOnInit() {

    this.newBand = false;
    this.bandForm = new FormGroup({
      'id': new FormControl(),
      'name': new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
    this.userForm = new FormGroup({
      'id': new FormControl(),
      'username': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'password': new FormControl(),
      'band_id': new FormControl(),
      'admin': new FormControl(),
    });

    this.isEditUser = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getById(parseInt(id, 10)).subscribe((response: User) => {
      console.log(response);
      this.userForm.setValue(response);
      if (response.id) {
        this.isEditUser = true;
      }
    });
  }

  saveBand() {
    const band = this.bandForm.value;

    this.bandUserService.create(band)
      .subscribe((response: any) => {
        this.newBand = true;
        this.bandForm.setValue({
          id: response.id,
          name: response.name
        });
       this.userForm.controls.band_id.setValue(response.id);

      });
  }

  saveUser() {
    const user = this.userForm.value;
    console.log(user);
    if (user.id) {
      this.userService.update(user)
        .subscribe((response) => {
          this.toastr.success('User updated successfully', 'YES');
          this.userForm.setValue(response);
          if (this.shouldNavigateToList) {
            this.navigateToList();
          }
        }, (err) => {
          this.toastr.error('User already exists!', 'NONONO');
        });
    } else {
      this.userService.create(user)
        .subscribe((response: any) => {
          this.toastr.success('User created successfully', 'YES');
          // console.log(this.userForm);
          if (this.shouldNavigateToList) {
            this.navigateToList();
          } else {
            this.router.navigate(['/banduser-list']);
          }
        }, (err) => {
          this.toastr.error('User already exists!', 'NONONO');
        });
    }

  }

  navigateToList() {
    this.router.navigate(['/banduser-list']);
  }

  setShouldNavigateToList() {
    this.shouldNavigateToList = true;
  }

}
