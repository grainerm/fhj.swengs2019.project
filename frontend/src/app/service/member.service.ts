import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getAll(id) {
    return this.http.get('/api/bands/' + id + '/members');
  }

  delete(member) {
    return this.http.delete('/api/members/' + member.memberID);
  }

  create(member) {
    return this.http.post('/api/dto/members', member);
  }
}
