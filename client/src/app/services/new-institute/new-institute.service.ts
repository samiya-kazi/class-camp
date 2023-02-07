import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Institute } from 'src/app/models/institute.model';

@Injectable({
  providedIn: 'root'
})
export class NewInstituteService {

  constructor() { }

  newInstitute = new Subject<Institute>()

  getNewInstitute () {
    return this.newInstitute;
  }

  setNewInstitute (institute: Institute) {
    this.newInstitute.next(institute)
  }
}
