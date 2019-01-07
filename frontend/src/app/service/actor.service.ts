import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Actor} from '../api/actor';
import {catchError, map} from 'rxjs/operators';
import {of, throwError} from 'rxjs';
import {OnlineStatusService, OnlineStatusType} from './online-status.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private toastrService: ToastrService, private http: HttpClient, private onlineStatusService: OnlineStatusService, private router: Router) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      if (status === OnlineStatusType.ONLINE) {
        const offlineActors = this.getOfflineActors();
        while (offlineActors.length > 0) {
          const offlineActor = offlineActors.pop();
          const offlineActorId = offlineActor.id;
          offlineActor.id = null;
          this.create(offlineActor).subscribe((response: any) => {
            console.log('saved successfully');
            if (this.router.url === '/actor-form/' + offlineActorId) {
              this.router.navigate(['/actor-form', response.id]);
            }
          });
          this.setOfflineActors(offlineActors);
        }
      }
    });
  }

  getById(id: number) {
    if (id < 0) {
      return of(this.getOfflineActors().find(offlineActor => offlineActor.id === id));
    }
    return this.http.get('/api/dto/actors/' + id).pipe(map((res: any) => {
      if (res.dayOfBirth) {
        res.dayOfBirth = new Date(res.dayOfBirth);
      }
      return res;
    }));
  }

  getAll() {
    return this.http.get('/api/actors').pipe(
      map((response: any) => {
        return response._embedded.actors.concat(this.getOfflineActors());
      })
    );
  }

  delete(actor) {
    return this.http.delete('/api/actors/' + actor.id);
  }

  update(actor: Actor) {
    return this.http.put('/api/dto/actors/' + actor.id, actor).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('toastrService!');

        this.toastrService.error('You can not update when offline');

        return throwError(err);
      }));
  }

  create(actor: Actor) {
    return this.http.post('/api/dto/actors', actor)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (!navigator.onLine) {
            actor.id = new Date().getUTCMilliseconds() * -1;
            const offlineActors = this.getOfflineActors();
            offlineActors.push(actor);
            this.setOfflineActors(offlineActors);
          }
          return of(actor);
        })
      );
  }

  setOfflineActors(offlinceActors) {
    localStorage.setItem('offlineActors', JSON.stringify(offlinceActors));
  }

  getOfflineActors(): Array<any> {
    return localStorage.getItem('offlineActors') ? <Array<any>>JSON.parse(localStorage.getItem('offlineActors')) : [];
  }

}
