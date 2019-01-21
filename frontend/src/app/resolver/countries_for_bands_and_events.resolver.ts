import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CountryService} from '../service/country.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesBandsAndEventsResolver implements Resolve<Observable<Array<any>>> {

  constructor(private countriesService: CountryService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    return this.countriesService.getCountriesWithBandsAndEvents();
  }
}
