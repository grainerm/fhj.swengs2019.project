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

@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.scss']
})
export class BandViewComponent implements OnInit {

  countries: Array<Country>;
  memberForm;
  eventForm;
  bandForm;
  modalRef;
  members;
  events;

  constructor(private memberService: MemberService, private modalService: BsModalService, private route: ActivatedRoute,
              private bandService: BandService, private eventService: EventService, private  countryService: CountryService) { }

  ngOnInit() {

    /*this.bandForm = this.fb.group({
      id: [''],
      name: [''],
      foundingYear: [''],
      country: [''],
      genre: [''],

    });*/

    this.bandForm = new FormGroup({
      'id': new FormControl(),
      'name': new FormControl(),
      'foundingYear': new FormControl(),
      'country': new FormControl(),
      'genre': new FormControl(),
      'events': new FormControl(),
      'albums': new FormControl(),
      'member': new FormControl(),
      'bandPicture': new FormControl(),
      'description': new FormControl()
    });
    this.memberForm = new FormGroup({
      'memberID': new FormControl(),
      'role': new FormControl(),
      'name': new FormControl(),
      'band_id': new FormControl()
    });
    this.eventForm = new FormGroup({
      'eventID': new FormControl(),
      'name': new FormControl(),
      'place': new FormControl(),
      'date': new FormControl(new Date()),
      'eventType': new FormControl(),
      'hostCountry': new FormControl()
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

    this.eventService.getAll()
      .subscribe((response: any) => {
        this.events = response._embedded.events;
      });
  }

  deleteMember(member: Member) {
    // const member = this.memberForm.value;
    console.log(member.memberID);
    this.memberService.delete(member)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

  addMember() {
    const id = this.route.snapshot.paramMap.get('id');
    const member = this.memberForm.value;
    console.log(member);
    this.memberService.create(member)
      .subscribe((response: any) => {
      alert('created successfully');
    });
    this.members.push(member);
    // this.memberForm.controls.name.setValue('');
    // this.memberForm.controls.role.setValue('');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  saveBand() {
    const band = this.bandForm.value;
    console.log(band.id);
    const id = this.route.snapshot.paramMap.get('id');
    if (band.id === 0) {
      this.bandService.update(band)
        .subscribe((response) => {
          alert('updated successfully');
          this.bandForm.setValue(response);
        });
    }
  }

  addEvent() {
    const event = this.eventForm.value;
    this.events.push(event);
    console.log(event.date);
    this.eventForm.reset();
    this.modalRef.hide();
  }

}
