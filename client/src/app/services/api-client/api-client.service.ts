import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InstituteClass } from 'src/app/models/class.model';
import { InstituteUser } from 'src/app/models/institute-user.model';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';
import { Institute } from 'src/app/models/institute.model';
import { User } from 'src/app/models/user.model';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentMark } from 'src/app/models/assignmentMark.model';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = environment.apiRootUrl;

  constructor(private http: HttpClient) { }

  editProfile (firstName: string, lastName: string, email: string, profile_pic_url?: string) : Observable<User> {
    return this.http.put<User>(this.rootUrl + '/edit-profile', {firstName, lastName, email, profile_pic_url});
  }

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

  getAssignmentById (id: string) : Observable<Assignment> {
    return this.http.get<Assignment>(this.rootUrl + '/assignment/id/' + id);
  }

  getAssignmentMarks (id: string) : Observable<AssignmentMark[]> {
    return this.http.get<AssignmentMark[]>(this.rootUrl + '/assignment/marks/' + id);
  }

  getAssignmentMarkForUser (id: string) : Observable<AssignmentMark> {
    return this.http.get<AssignmentMark>(this.rootUrl + '/assignment/user/mark/' + id);
  }

  addAssignment (classId: string, name: string, description: string, totalMarks: number, dueDate?: Date) : Observable<Assignment> {
    return this.http.post<Assignment>(this.rootUrl + '/assignment/create', {classId, name, description, totalMarks, dueDate});
  }

  addAssignmentMark (assignment: Assignment, student: User, marksObtained: number) : Observable<AssignmentMark> {
    return this.http.post<AssignmentMark>(this.rootUrl + '/assignment/submit', {assignment, student, marksObtained});
  }
}
