import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BandService} from '../service/band.service';
import {BanduserService} from '../service/banduser.service';

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

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private bandUserService: BanduserService) { }

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

    const data = this.route.snapshot.data;
    const band = data.band;
    if (band) {
      this.bandForm.patchValue(band); }
    const id = this.route.snapshot.paramMap.get('id');
    const user = this.userService.getById(parseInt(id, 10));
    if (user) {
      this.userForm.patchValue(user); }
  }

  saveBand() {
    const band = this.bandForm.value;

    this.bandUserService.create(band)
      .subscribe((response: any) => {
        this.newBand = true;
        alert('created successfully');
        this.bandForm.setValue({
          id: response.id,
          name: response.name
        });
       this.userForm.controls.band_id.setValue(response.id);

      });
  }

  saveUser() {
    const user = this.userForm.value;
    if (user.id) {
      this.userService.update(user)
        .subscribe((response) => {
          alert('updated successfully');
          this.userForm.setValue(response);
          if (this.shouldNavigateToList) {
            this.navigateToList();
          }
        });
    } else {
      this.userService.create(user)
        .subscribe((response: any) => {
          alert('created successfully');
          // console.log(this.userForm);
          if (this.shouldNavigateToList) {
            this.navigateToList();
          } else {
            this.router.navigate(['/banduser-list']);
          }
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
