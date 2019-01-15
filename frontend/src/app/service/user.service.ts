import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {of, Subject, throwError} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {User} from '../api/user';
import {Actor} from '../api/actor';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAdmin: boolean;
  isLoggedIn = false;
  loggedInChange: Subject<boolean> = new Subject<boolean>();
  jwtHelperService: JwtHelperService;

  accessTokenLocalStorageKey = 'access_token';

  constructor(private http: HttpClient, private router: Router, private toastrService: ToastrService) {
    this.jwtHelperService = new JwtHelperService();
    const token = localStorage.getItem(this.accessTokenLocalStorageKey);
    if (token) {
      console.log('Token expiration date: '
        + this.jwtHelperService.getTokenExpirationDate(token));
      this.isLoggedIn = !this.jwtHelperService.isTokenExpired(token);
    }
    this.loggedInChange.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  login(user) {
    return this.http.post('/api/auth/', user, {
      'headers': new HttpHeaders({'Content-Type': 'application/json'}),
      'responseType': 'text',
      observe: 'response'
    }).pipe(map((res: any) => {
      const token = res.headers.get('Authorization').replace(/^Bearer /, '');
      localStorage.setItem(this.accessTokenLocalStorageKey, token);
      console.log(this.jwtHelperService.decodeToken(token));
      this.loggedInChange.next(true);
      this.isAdmin = this.getRole();
      if (this.isAdmin) {
        this.router.navigate(['/banduser-list']);
        return res;
      }
      this.getBand();
      console.log(user.id);
    }));
  }

  logout() {
    localStorage.removeItem(this.accessTokenLocalStorageKey);
    this.loggedInChange.next(false);
    this.router.navigate(['/login']);
  }
  delete(user) {
    return this.http.delete('/api/bandusers/' + user.id);
  }
  create(user: User) {
    return this.http.post('/api/dto/bandusers', user);
  }

  update(user: User) {
    return this.http.put('/api/dto/bandusers/' + user.id, user).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('toastrService!');

        this.toastrService.error('You can not update when offline');

        return throwError(err);
      }));
  }

  getAll() {
    return this.http.get('/api/users');
  }

  getRole() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem(this.accessTokenLocalStorageKey);
    token = helper.decodeToken(token);
    // console.log(token)
    if (token['authorities'].includes('ROLE_ADMIN')) {
      return true;
    }

    return false;
  }

  getBand() {
    this.router.navigate(['/band-view/1']);
  }
}
