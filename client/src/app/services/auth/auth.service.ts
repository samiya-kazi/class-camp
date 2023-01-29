import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  login (email : string, password: string) : Observable<User>{
    return this.http.post<User>(this.rootUrl + '/login', {email, password});
  }

  register (firstName: string, lastName: string, email : string, password: string) : Observable<User>{
    return this.http.post<User>(this.rootUrl + '/login', {firstName, lastName, email, password});
  }

  logout () {
    localStorage.clear();
  }
}
