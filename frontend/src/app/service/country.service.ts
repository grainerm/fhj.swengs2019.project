import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountriesWithBands() {
    return this.http.get('api/dto/countrieswithbands');
  }
  getCountriesWithEvents() {
    return this.http.get('api/dto/countrieswithevents');
  }
  getCountriesWithBandsAndEvents() {
    return this.http.get('api/dto/countrieswithbandsandevents');
  }

  getAll() {
    return this.http.get('api/dto/countries');
  }
}
