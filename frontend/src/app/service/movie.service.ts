import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get('/api/movies').pipe(map((response: any) => {
      return response._embedded.movies;
    }));
  }

}
