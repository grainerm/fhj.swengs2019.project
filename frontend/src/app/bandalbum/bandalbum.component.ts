import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AlbumService} from '../service/album.service';
import {Album} from '../api/album';
import {Song} from '../api/song';
import {SongService} from '../service/song.service';
import {isBoolean} from 'ngx-bootstrap/chronos/utils/type-checks';
import {passBoolean} from 'protractor/built/util';
import {User} from '../api/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-bandalbum',
  templateUrl: './bandalbum.component.html',
  styleUrls: ['./bandalbum.component.scss']
})
export class BandalbumComponent implements OnInit {

  albumForm;
  songForm;
  albums: Array<Album>;
  songs: Array<Song>;
  //edit;


  constructor(private route: ActivatedRoute, private albumService: AlbumService, private songService: SongService) {
  }

  ngOnInit() {

    this.albumForm = new FormGroup({
      'albumID': new FormControl(),
      'name': new FormControl(),
      'releaseYear': new FormControl(),
      'songs': new FormControl(),
      'edit':  new FormControl()
    });


    this.songForm = new FormGroup({
      'name': new FormControl(),
      'album': new FormControl(),
      'length': new FormControl()
    });
    const data = this.route.snapshot.data;
    this.albums = data.albums._embedded.albums;

    this.songService.getAll().subscribe((response: any) => {
      this.songs = response._embedded.songs;
      console.log('songs', this.songs);
    });

    console.log('albums', this.albums);
  }

  getAlbumID() {
    return this.albumForm.value.albumID;
  }

  saveAlbum() {
    const album = this.albumForm.value;

    this.albumService.saveAlbum(album)
      .subscribe((response: any) => {
        this.albums.push(response);
      });
    this.albumForm.reset();
  }

  deleteAlbum(album: Album) {
    this.albumService.deleteAlbum(album)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  saveSong(albumID) {
    const song = this.songForm.value;
    song.album = albumID;
    console.log(song);
    this.songService.saveSong(song)
      .subscribe((response: any) => {
        this.songs.push(response);
      });
    this.songForm.reset();
  }

  deleteSong(song: Song) {
    this.songService.deleteSong(song)
      .subscribe(() => {
      this.ngOnInit();
    });
  }
}
