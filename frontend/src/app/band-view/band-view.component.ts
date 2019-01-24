import {Component, OnInit, TemplateRef} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {MemberService} from '../service/member.service';
import {BsModalService} from 'ngx-bootstrap';
import {ActivatedRoute, Route} from '@angular/router';
import {BandService} from '../service/band.service';
import {EventService} from '../service/event.service';
import {Member} from '../api/member';
import {CountryService} from '../service/country.service';
import {UserService} from '../service/user.service';
import {User} from '../api/user';
import {ToastrService} from 'ngx-toastr';

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
  bandOwner: boolean;
  regexp;

  constructor(private memberService: MemberService, private modalService: BsModalService, private route: ActivatedRoute,
              private bandService: BandService, private eventService: EventService, private  countryService: CountryService,
              private userService: UserService, private toastr: ToastrService) {
  }

  ngOnInit() {

    // The regular expression is used to only allow URLs for the image that end with one of the types
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
      'description': new FormControl('', [Validators.maxLength(255)])
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

    // If the user is admin or the band_id of the user = the id of the viewed band, he is considered the band owner
    this.bandOwner = false;
    if (this.userService.isLoggedIn && this.userService.getRole()) {
      this.bandOwner = true;
    } else {
      this.userService.getBandUser().subscribe((res: User) => {
        if (this.bandForm.value.id === res.band_id) {
          this.bandOwner = true;
        }
      });
    }

    const data = this.route.snapshot.data;
    this.countries = data.countries;
    /* this.countryService.getAll().subscribe((response: any) => {
      this.countries = response;
    });*/

    const band = data.band;
    if (band) {
      this.bandForm.setValue(band);
    }

    // Getting all members of the viewed band
    const id = this.route.snapshot.paramMap.get('id');
    this.memberService.getAll(id)
      .subscribe((response: any) => {
        this.members = response._embedded.members;
      });

    // Getting all events of the viewed band
    this.eventService.getAllByBand(id)
      .subscribe((response: any) => {
        this.events = response._embedded.events;
      });

    // If the band has no picture, the default image is used, otherwise the image of the bandForm is used
    this.pictureUrl = 'https://stmed.net/sites/default/files/band-%28music%29-wallpapers-30255-4113516.jpg';
    this.hasPicture = false;
    if (this.bandForm.value.bandPicture) {
      this.hasPicture = true;
      this.pictureUrl = this.bandForm.value.bandPicture;
    }
  }

  // Member section
  deleteMember(member: Member) {
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
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  // Event section
  addEvent() {
    const idArray: Array<string> = [this.route.snapshot.paramMap.get('id')];
    this.eventForm.controls.bands.setValue(idArray);
    const event = this.eventForm.value;

    this.eventService.create(event)
      .subscribe((response: any) => {
        this.events.push(response);
        this.bandForm.value.events.push(response.eventID);
      });
    this.eventForm.reset();
    this.modalRef.hide();
  }

  deleteEvent(event: Event) {
    this.eventService.delete(event)
      .subscribe((response) => {
        this.ngOnInit();
      });
  }

  // Band section
  saveBand() {
    const band = this.bandForm.value;
    if (band.bandPicture.match(this.regexp)) {
      this.pictureUrl = band.bandPicture;
      this.hasPicture = true;
    } else {
      band.bandPicture = this.pictureUrl;
    }
    if (band.id) {
      this.bandService.update(band)
        .subscribe((response) => {
          this.toastr.success('Band updated successfully', 'YES');
          this.bandForm.setValue(response);
        });
    }
  }

  editPicture() {
    this.hasPicture = false;
  }

}
