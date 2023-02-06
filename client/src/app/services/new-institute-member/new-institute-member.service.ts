import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InstituteUser } from 'src/app/models/institute-user.model';

@Injectable({
  providedIn: 'root'
})
export class NewInstituteMemberService {

  newInstituteMember = new Subject<InstituteUser>()

  constructor() { }

  getNewInstituteMember () {
    return this.newInstituteMember;
  }

  setNewInstituteMember (user: InstituteUser) {
    this.newInstituteMember.next(user);
  }
}
