import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AlbumService} from '../service/album.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolver implements Resolve<Observable<Array<any>>> {

  constructor(private albumService: AlbumService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    return this.albumService.getAll();
  }

}
