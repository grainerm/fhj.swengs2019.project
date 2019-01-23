import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BandService} from '../service/band.service';

@Injectable({
  providedIn: 'root'
})
export class BandListResolver implements Resolve<Observable<any>> {

  constructor(private bandService: BandService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {

    return this.bandService.getAll();

  }

}
