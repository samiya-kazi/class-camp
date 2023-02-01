import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstituteClass } from 'src/app/models/class.model';
import { InstituteUser } from 'src/app/models/institute-user.model';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUserInstitutes () : Observable<InstituteUser[]> {
    return this.http.get<InstituteUser[]>(this.rootUrl + '/institute');
  }

  getClasses (id : string) : Observable<InstituteClass[]> {
    return this.http.get<InstituteClass[]>(this.rootUrl + '/class/institute/' + id);
  }

  getPosts (id : string) : Observable<Post[]> {
    return this.http.get<Post[]>(this.rootUrl + '/class/' + id + '/post');
  }

  addPost (classId: string, content: string) : Observable<Post>{
    return this.http.post<Post>(this.rootUrl + '/class/' + classId + '/post', {content});
  }
}
