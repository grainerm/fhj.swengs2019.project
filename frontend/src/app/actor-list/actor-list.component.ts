import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from '../api/actor';
import {ActorService} from '../service/actor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ifError} from 'assert';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  actors: Array<Actor>;


  constructor(private toastrService: ToastrService, private actorService: ActorService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    /*this.actorService.getAll()
      .subscribe((actors: any) => {
        this.actors = actors;
      });*/

    const data = this.route.snapshot.data;
    this.actors = data.actors;
  }

  deleteActor(actor: Actor) {

    this.actorService.delete(actor)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

  createActor() {
    this.router.navigate(['/actor-form']);
  }

  editActor(id) {
    this.router.navigate(['/actor-form/' + id]).then(success => {
      console.log(success);
    }, error => {
      this.toastrService.error('This is not possible :(');
  });
 }
}
