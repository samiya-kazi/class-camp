import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InstituteClass } from 'src/app/models/class.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateInstituteClassesService {

  constructor() { }

  newClass = new Subject<InstituteClass>();

  getNewClass () {
    return this.newClass;
  }

  setNewClass (clss: InstituteClass) {
    this.newClass.next(clss);
  }
}
