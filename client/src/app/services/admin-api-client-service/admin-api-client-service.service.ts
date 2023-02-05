import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstituteUser } from 'src/app/models/institute-user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminApiClientServiceService {

  rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addClassMember () : Observable<InstituteUser[]> {
    return this.http.get<InstituteUser[]>(this.rootUrl + '/institute');
  }
}
