import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Actor} from '../api/actor';
import {MemberService} from '../service/member.service';

@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.scss']
})
export class BandViewComponent implements OnInit {

  private test: Array<string>;
  memberForm;


  constructor(private memberService: MemberService) { }

  ngOnInit() {

    this.memberForm = new FormGroup({
      'role': new FormControl(),
      'name': new FormControl(),
      'year': new FormControl(),
      'country': new FormControl(),
      'newRole': new FormControl(),
      'newMember': new FormControl()
    });

    this.test = ['lala', 'dljdf'];

  }

  deleteMember() {
    const member = this.memberForm.value;
    this.memberService.delete(member)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

}
