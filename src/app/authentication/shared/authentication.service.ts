import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {}

    login(login: String, password: String) {
      const body = JSON.stringify({
        user_login: login,
        user_password: password
      });
      const headers = new Headers({ 'Content-Type': 'application/json'});
      return this.http.post(environment.apiUrl + '/users/login', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }

    register(firstname: String, lastname: String, userName: String, password: String) {
      const body = JSON.stringify({
        user_firstname: firstname,
        user_lastname: lastname,
        user_login: userName,
        user_password: password
      });
      const headers = new Headers({ 'Content-Type': 'application/json'});
      return this.http.post(environment.apiUrl + '/users/register', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }

    logout() {
      localStorage.clear();
    }

    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }

    getCurrentUser() {

    }
}
