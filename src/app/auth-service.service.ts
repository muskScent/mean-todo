import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

//import { User } from "./user.model";

@Injectable()
export class AuthService {
    constructor(private http: Http) {}

    login(login: String, password: String) {
      console.log('Logging in service');
      const body = JSON.stringify({
        login: login,
        password: password
      });
      const headers = new Headers({ 'Content-Type': 'application/json'});
      return this.http.post('http://localhost:3000/users/login', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }

    logout() {
      localStorage.clear();
    }

    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }
}