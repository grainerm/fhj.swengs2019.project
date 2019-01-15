import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

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

  getAll() {
    return this.http.get('/api/bands');
  }
/*
  create(band: Band) {
    return this.http.post('/api/dto/bands', band)
      .pipe();
  }*/
}
