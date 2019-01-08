import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Actor} from '../api/actor';
import {MemberService} from '../service/member.service';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.scss']
})
export class BandViewComponent implements OnInit {

  private test: Array<string>;
  memberForm;
  eventForm;
  bandForm;
  modalRef;

  constructor(private memberService: MemberService, private modalService: BsModalService) { }

  ngOnInit() {

    this.bandForm = new FormGroup({
      'foundingYear': new FormControl(),
      'country': new FormControl()
    });
    this.memberForm = new FormGroup({
      'role': new FormControl(),
      'name': new FormControl(),
      'newRole': new FormControl(),
      'newMember': new FormControl()
    });
    this.eventForm = new FormGroup({
      'eventName': new FormControl(),
      'location': new FormControl(),
      'date': new FormControl(),
      'type': new FormControl()
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
