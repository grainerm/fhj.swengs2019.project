import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Actor} from '../api/actor';
import {MemberService} from '../service/member.service';
import {BsModalService} from 'ngx-bootstrap';
import {ActivatedRoute, Route} from '@angular/router';
import {BandService} from '../service/band.service';

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
  members;

  constructor(private memberService: MemberService, private modalService: BsModalService, private route: ActivatedRoute,
              private bandService: BandService) { }

  ngOnInit() {

    this.bandForm = new FormGroup({
      'id': new FormControl(),
      'name': new FormControl(),
      'foundingYear': new FormControl(),
      'country': new FormControl(),
      'member': new FormControl(),
      'genre': new FormControl(),
      'events': new FormControl(),
      'albums': new FormControl(),
      'bandPicture': new FormControl()
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

    this.memberService.getAll()
      .subscribe((response: any) => {
        this.members = response._embedded.members;
      });

    const data = this.route.snapshot.data;
    const band = data.band;
    if (band) {
      console.log(band.bandPicture);
      this.bandForm.setValue(band); }
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
