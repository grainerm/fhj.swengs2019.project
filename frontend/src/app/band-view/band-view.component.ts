import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Actor} from '../api/actor';
import {MemberService} from '../service/member.service';
import {BsModalService} from 'ngx-bootstrap';
import {ActivatedRoute, Route} from '@angular/router';
import {BandService} from '../service/band.service';
import {EventService} from '../service/event.service';
import {Member} from '../api/member';
import {CountryService} from '../service/country.service';
import {Country} from '../api/country';
import {UserService} from '../service/user.service';
import {User} from '../api/user';

@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.scss']
})
export class BandViewComponent implements OnInit {

  countries;
  memberForm;
  eventForm;
  bandForm;
  modalRef;
  members;
  events;
  pictureUrl: string;
  hasPicture: boolean;
  regexp;

  constructor(private memberService: MemberService, private modalService: BsModalService, private route: ActivatedRoute,
              private bandService: BandService, private eventService: EventService, private  countryService: CountryService,
              private userService: UserService) {
  }

  ngOnInit() {

    this.regexp = /\.(jpeg|jpg|gif|png)$/;

    this.bandForm = new FormGroup({
      'id': new FormControl(),
      'name': new FormControl(),
      'foundingYear': new FormControl(),
      'country': new FormControl(),
      'genre': new FormControl(),
      'events': new FormControl(),
      'albums': new FormControl(),
      'member': new FormControl(),
      'bandPicture': new FormControl('', [Validators.pattern(this.regexp)]),
      'description': new FormControl()
    });
    this.memberForm = new FormGroup({
      'memberID': new FormControl(0),
      'role': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required]),
      'band_id': new FormControl(this.route.snapshot.paramMap.get('id'))
    });
    this.eventForm = new FormGroup({
      'eventID': new FormControl(0),
      'name': new FormControl('', [Validators.required]),
      'place': new FormControl('', [Validators.required]),
      'date': new FormControl('', [Validators.required]),
      'eventType': new FormControl('', [Validators.required]),
      'hostCountry': new FormControl('', [Validators.required]),
      'bands': new FormControl()
    });

    this.userService.getBandUser().subscribe((res: User) => {
      console.log(res);
    });

    this.countryService.getAll().subscribe((response: any) => {
      this.countries = response._embedded.countries;
      console.log(this.countries);
    });

    const data = this.route.snapshot.data;
    const band = data.band;
    // console.log(band.member);
    if (band) {
      this.bandForm.setValue(band);
      console.log(this.bandForm.value);
    }

    const id = this.route.snapshot.paramMap.get('id');
    this.memberService.getAll(id)
      .subscribe((response: any) => {
        this.members = response._embedded.members;
      });

    this.eventService.getAllByBand(id)
      .subscribe((response: any) => {
        this.events = response._embedded.events;
      });

    this.pictureUrl = '';
    this.hasPicture = false;
    if (this.bandForm.value.bandPicture) {
      this.hasPicture = true;
      this.pictureUrl = this.bandForm.value.bandPicture;
    }
  }

  // members
  deleteMember(member: Member) {
    // const member = this.memberForm.value;
    console.log(member);
    this.memberService.delete(member)
      .subscribe((response) => {
        this.ngOnInit();
      });

  }

  addMember() {
    if (!this.memberForm.value.memberID) {
      this.memberForm.controls.memberID.setValue(0);
      this.memberForm.controls.band_id.setValue(this.route.snapshot.paramMap.get('id'));
    }
    const member = this.memberForm.value;

    this.memberService.create(member)
      .subscribe((response: any) => {
        this.members.push(response);
      });
    this.memberForm.reset();
    // this.bandForm.controls.member.setValue(this.members);

    console.log(this.bandForm.value);
    // this.memberForm.controls.name.setValue('');
    // this.memberForm.controls.role.setValue('');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  // events
  addEvent() {
    const idArray: Array<string> = [this.route.snapshot.paramMap.get('id')];
    this.eventForm.controls.bands.setValue(idArray);
    const event = this.eventForm.value;

    this.eventService.create(event)
      .subscribe((response: any) => {
        this.events.push(response);
      });
    console.log(event.date);
    this.eventForm.reset();
    this.modalRef.hide();
  }
  deleteEvent(event: Event) {
    console.log(event);
    this.eventService.delete(event)
      .subscribe((response) => {
        this.ngOnInit();
      });
  }

  saveBand() {
    const band = this.bandForm.value;
    if (band.bandPicture.match(this.regexp)) {
      this.pictureUrl = band.bandPicture;
      this.hasPicture = true;
      console.log('valid picture');
    } else {
      band.bandPicture = this.pictureUrl;
    }
    if (band.id) {
      this.bandService.update(band)
        .subscribe((response) => {
          alert('updated successfully');
          this.bandForm.setValue(response);
        });
    }
  }

  editPicture() {
    this.hasPicture = false;
  }

}
