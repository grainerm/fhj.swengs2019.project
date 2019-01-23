import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/api/dto/songs');
  }

  deleteSong(song) {
    return this.http.delete('/api/songs/' + song.id);
  }

  saveSong(song) {
    return this.http.post('/api/dto/songs', song);
  }
}
