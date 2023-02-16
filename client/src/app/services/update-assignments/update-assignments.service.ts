import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Assignment } from 'src/app/models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateAssignmentsService {

  constructor() { }

  newAssignment = new Subject<Assignment>();

  getNewAssignment () {
    return this.newAssignment;
  }

  setNewAssignment (assignment: Assignment) {
    this.newAssignment.next(assignment);
  }
}
