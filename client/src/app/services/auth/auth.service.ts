import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/models/state.model';
import { User } from 'src/app/models/user.model';
import { RemoveUserAction } from 'src/app/store/actions/user.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient, 
    private store: Store<State>, 
    private router: Router
    ) { }

  login (email : string, password: string) : Observable<User>{
    return this.http.post<User>(this.rootUrl + '/login', {email, password});
  }

  register (firstName: string, lastName: string, email : string, password: string) : Observable<User>{
    return this.http.post<User>(this.rootUrl + '/register', {firstName, lastName, email, password});
  }

  logout () {
    localStorage.clear();
    this.store.dispatch(RemoveUserAction());
    this.router.navigate(['']);
  }
}
