import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InstituteClass } from 'src/app/models/class.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateClassMembersService {

  updatedClass = new Subject<InstituteClass>()

  constructor() { }

  getUpdatedClass () {
    return this.updatedClass;
  }

  setUpdatedClass (clss: InstituteClass) {
    this.updatedClass.next(clss);
  }
}
