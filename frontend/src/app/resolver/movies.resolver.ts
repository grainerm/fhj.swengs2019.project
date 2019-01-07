import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MovieService} from '../service/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<Observable<Array<any>>> {

  constructor(private moviesService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    return this.moviesService.getAll();
  }

}
