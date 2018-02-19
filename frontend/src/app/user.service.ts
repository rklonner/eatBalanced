import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';


@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8000/api/users';  // URL to web api
  
  constructor(
    private http: HttpClient,
  ) { }

  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

}
