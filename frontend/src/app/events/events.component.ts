import { Component, OnInit } from '@angular/core';
import {EventService} from '../service/event.service';
import {ActivatedRoute} from '@angular/router';
import {Event} from '../api/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Array<Event>;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {

    this.eventService.getAll()
      .subscribe((response: any) => {
        this.events = response._embedded.events;
      });
  }

}
