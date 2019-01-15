import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {Band} from '../api/bandname';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get('/api/dto/bands/' + id).pipe(
      map((res: any) => {
      return res;
    }));
  }

  create(band: Band) {
    return this.http.post('/api/dto/bands', band)
      .pipe();
  }

  getAll() {
    return this.http.get('/api/dto/bands').pipe(map((response: any) => {
      return response._embedded.band;
    }));
  }
}
