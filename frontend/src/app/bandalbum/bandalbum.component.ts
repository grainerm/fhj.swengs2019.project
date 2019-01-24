import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AlbumService} from '../service/album.service';
import {Album} from '../api/album';
import {Song} from '../api/song';
import {SongService} from '../service/song.service';
import {User} from '../api/user';
import {UserService} from '../service/user.service';
import {BandViewComponent} from '../band-view/band-view.component';

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
  bandOwner: boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private songService: SongService,
              private bandViewComp: BandViewComponent, private userService: UserService) {
  }

  ngOnInit() {

    // Determining the band owner
    // The same procedure is used in band-view.component
    this.bandOwner = false;
    if (this.userService.isLoggedIn && this.userService.getRole()) {
      this.bandOwner = true;
    } else {
      this.userService.getBandUser().subscribe((res: User) => {
        if (parseInt(this.route.snapshot.paramMap.get('id'), 10) === res.band_id) {
          this.bandOwner = true;
        }
      });
    }
    // Forms
    this.albumForm = new FormGroup({
      'albumID': new FormControl(),
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'releaseYear': new FormControl('', [Validators.required]),
      'songs': new FormControl(),
      'band':  new FormControl()
    });
    this.songForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'album': new FormControl(),
      'length': new FormControl('', [Validators.required])
    });

    const data = this.route.snapshot.data;
    this.albums = data.albums._embedded.albums;

    this.songService.getAll().subscribe((response: any) => {
      this.songs = response;
    });
  }

  // Album section
  saveAlbum() {
    const album = this.albumForm.value;
    album.band = this.route.snapshot.paramMap.get('id');
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

  // Song section
  saveSong(albumID) {
    const song = this.songForm.value;
    song.album = albumID;
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
