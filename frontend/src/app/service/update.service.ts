import {SwUpdate} from '@angular/service-worker';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(updates: SwUpdate) {
    console.log('updateservice run');
    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      updates.activateUpdate().then(() => document.location.reload());
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
