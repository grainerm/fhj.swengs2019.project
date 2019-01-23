import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../api/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) {
  }


  saveAlbum(album: Album) {
    return this.http.post('/api/dto/albums', album);
  }

  getAll() {
    return this.http.get('/api/albums');
  }

  deleteAlbum(album) {
    return this.http.delete('/api/albums/' + album.albumID);
  }

  getAlbumsByBand(id) {
    return this.http.get('/api/bands/' + id + '/albums');
  }
}
