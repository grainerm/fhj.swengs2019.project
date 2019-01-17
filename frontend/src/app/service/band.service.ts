import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Band} from '../api/band';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get('/api/dto/bandNames/' + id).pipe(
      map((res: any) => {
      return res;
    }));
  }

  update(band: Band) {
    return this.http.put('/api/dto/bandNames/' + band.id, band);
  }

  create(band: Band) {
    return this.http.post('/api/dto/bandNames', band);
  }

  getAll() {
    return this.http.get('/api/bandNames');
  }
}
