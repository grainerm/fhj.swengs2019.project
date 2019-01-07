import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from '../api/actor';
import {ActivatedRoute, Router} from '@angular/router';
import {ActorService} from '../service/actor.service';
import {MovieService} from '../service/movie.service';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.scss']
})
export class ActorFormComponent implements OnInit {

  actorForm;
  shouldNavigateToList: boolean;
  movieOptions;

  constructor(private actorService: ActorService, private route: ActivatedRoute, private router: Router,
              private movieService: MovieService) {
  }

  ngOnInit() {




    this.actorForm = new FormGroup({
      'id': new FormControl(),
      'firstName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl(),
      'rating': new FormControl(),
      'movies': new FormControl(),
      'dayOfBirth': new FormControl(),
      'gender': new FormControl(),
      'alive': new FormControl(),
    });



    this.actorForm.controls.rating.valueChanges
      .subscribe((newValue) => {
        if (newValue > 5) {
          this.actorForm.controls.alive.setValue(true);
        }
      });

    const data = this.route.snapshot.data;
    this.movieOptions = data.movies;

    const actor = data.actor;
    if (actor) {
      this.actorForm.setValue(actor); }
  }

  saveActor() {

    const actor = this.actorForm.value;
    if (actor.id) {
      this.actorService.update(actor)
        .subscribe((response) => {
          alert('updated successfully');
          this.actorForm.setValue(response);
          if (this.shouldNavigateToList) {
            this.navigateToList();
          }
        });
    } else {
      this.actorService.create(actor)
        .subscribe((response: any) => {
          alert('created successfully');
          if (this.shouldNavigateToList) {
            this.navigateToList();
          } else {
            this.router.navigate(['/actor-form', response.id]);
          }
        });
    }

  }

  navigateToList() {
    this.router.navigate(['/actor-list']);
  }

  setShouldNavigateToList() {
    this.shouldNavigateToList = true;
  }

}
