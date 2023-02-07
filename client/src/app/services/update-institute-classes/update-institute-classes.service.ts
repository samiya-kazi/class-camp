import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InstituteClass } from 'src/app/models/class.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateInstituteClassesService {

  constructor() { }

  newClass = new Subject<InstituteClass>();
  removeClass = new Subject<InstituteClass>();

  getNewClass () {
    return this.newClass;
  }

  getRemoveClass () {
    return this.removeClass;
  }

  setNewClass (clss: InstituteClass) {
    this.newClass.next(clss);
  }

  deleteClass (clss: InstituteClass) {
    this.removeClass.next(clss)
  }
}
