import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstituteClass } from 'src/app/models/class.model';
import { InstituteUser } from 'src/app/models/institute-user.model';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';
import { Institute } from 'src/app/models/institute.model';
import { User } from 'src/app/models/user.model';
import { Assignment } from 'src/app/models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUserInstitutes () : Observable<InstituteUser[]> {
    return this.http.get<InstituteUser[]>(this.rootUrl + '/institute');
  }

  getInstituteById (id: string) : Observable<Institute> {
    return this.http.get<Institute>(this.rootUrl + '/institute/' + id);
  }

  getClasses (id : string) : Observable<InstituteClass[]> {
    return this.http.get<InstituteClass[]>(this.rootUrl + '/class/institute/' + id);
  }

  getPosts (id : string) : Observable<Post[]> {
    return this.http.get<Post[]>(this.rootUrl + '/class/' + id + '/post');
  }

  getClassById (id: string) : Observable<InstituteClass>{
    return this.http.get<InstituteClass>(this.rootUrl + '/class/' + id);
  }

  getUserRole (userId: string, instituteId: string) : Observable<InstituteUser> {
    return this.http.get<InstituteUser>(this.rootUrl + '/institute/' + instituteId + '/user/' + userId);
  }

  addPost (classId: string, content: string) : Observable<Post>{
    return this.http.post<Post>(this.rootUrl + '/class/' + classId + '/post', {content});
  }

  addComment (postId: string, content: string) : Observable<Comment[]>{
    return this.http.post<Comment[]>(this.rootUrl + '/post/' + postId + '/comment', {content});
  }

  addInstitute (name: string, type: string, description?: string | null, img_url?: string | null) : Observable<Institute>{
    return this.http.post<Institute>(this.rootUrl + '/institute', {name, type, description, img_url});
  }

  getAssignments (classId: string) : Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.rootUrl + '/assignment/class/' + classId);
  }

  addAssignment (classId: string, name: string, description: string, totalMarks: number, dueDate?: Date) : Observable<Assignment> {
    return this.http.post<Assignment>(this.rootUrl + '/assignment/create', {classId, name, description, totalMarks, dueDate});
  }
}
