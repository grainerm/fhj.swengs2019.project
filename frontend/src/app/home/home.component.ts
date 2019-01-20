import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MemberService} from '../service/member.service';
import {BsModalService} from 'ngx-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {BandService} from '../service/band.service';
import {EventService} from '../service/event.service';
import {Actor} from '../api/actor';
import {Band} from '../api/band';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-band',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bands: Array<Band>;
  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute, private bandService: BandService, private router: Router) { }

  ngOnInit() {

    /*this.homeForm = new FormGroup({
      'name': new FormControl(),
      'bandPicture': new FormControl(),
      'description': new FormControl()
    });

    const data = this.route.snapshot.data;
    const band = data.band;
    if (band) {
      this.homeForm.setValue(band);
      console.log(this.homeForm.value.name);
    }*/

    const data = this.route.snapshot.data;
    this.bands = data.bands._embedded.bands;
    console.log(this.bands);

  }

  navBand(id) {
    this.router.navigate(['/band-view/' + id]);
  }
}
