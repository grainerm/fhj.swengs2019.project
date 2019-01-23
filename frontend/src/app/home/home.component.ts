import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BandService} from '../service/band.service';
import {Band} from '../api/band';

@Component({
  selector: 'app-band',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bands: Array<Band>;

  constructor(private route: ActivatedRoute, private bandService: BandService, private router: Router) { }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.bands = data.bands._embedded.bands;
  }

  navBand(id) {
    this.router.navigate(['/band-view/' + id]);
  }
}
