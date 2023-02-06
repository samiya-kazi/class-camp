import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InstituteClass } from 'src/app/models/class.model';
import { InstituteUser } from 'src/app/models/institute-user.model';
import { Institute } from 'src/app/models/institute.model';
import { State } from 'src/app/models/state.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminApiClientService {

  rootUrl = 'http://localhost:3000';
  institute!: Institute;

  constructor(private http: HttpClient, private store: Store<State>) {
    const institute$ = this.store.select(store => store.institute);
    institute$.subscribe(institute => this.institute = institute);
  }

  getInstituteMembers (id: string) : Observable<InstituteUser[]> {
    return this.http.get<InstituteUser[]>(this.rootUrl + '/institute/' + id + '/user');
  }

  addInstituteUser (email: string, type: string) : Observable<InstituteUser> {
    return this.http.post<InstituteUser>(this.rootUrl + '/institute/user/' + type, { email, institute: this.institute });
  }

  addNewClass (name: string, section: string, description: string) : Observable<InstituteClass> {
    return this.http.post<InstituteClass>(this.rootUrl + '/class', { name, section, description, institute: this.institute });
  }

  addUserToClass (classId: string, user: User) : Observable<InstituteClass> {
    return this.http.put<InstituteClass>(this.rootUrl + '/class/user/' + classId, { user, institute: this.institute });
  }
}