import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institute } from 'src/app/models/institute.model';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUserInstitutes () : Observable<Institute[]> {
    return this.http.get<Institute[]>(this.rootUrl + '/institute');
  }
}
