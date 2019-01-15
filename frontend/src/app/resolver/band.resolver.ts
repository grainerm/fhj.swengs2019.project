import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BandService} from '../service/band.service';

@Injectable({
  providedIn: 'root'
})
export class BandResolver implements Resolve<Observable<any>> {

  constructor(private bandService: BandService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.bandService.getById(parseInt(id, 10));
    }
    return null;
  }

}
