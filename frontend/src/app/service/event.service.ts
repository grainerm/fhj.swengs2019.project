import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/api/events');
  }

  delete(event) {
    return this.http.delete('/api/events/' + event.eventID);
  }

  create(event) {
    return this.http.post('/api/dto/events', event);
  }
}
