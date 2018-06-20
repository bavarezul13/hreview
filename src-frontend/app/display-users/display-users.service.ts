import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class DisplayUsersService {
  constructor (
    private _http: HttpClient
  ) {}

  getTestProfile() : Observable<User> {
    return this._http.get<any>(`http://localhost:8080/secure/all`);
  }

}
