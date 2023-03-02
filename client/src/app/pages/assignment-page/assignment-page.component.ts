import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentMark } from 'src/app/models/assignmentMark.model';
import { InstituteClass } from 'src/app/models/class.model';
import { State } from 'src/app/models/state.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

@Component({
  selector: 'app-assignment-page',
  templateUrl: './assignment-page.component.html',
  styleUrls: ['./assignment-page.component.css']
})
export class AssignmentPageComponent implements OnInit {

  assignmentId: string = '';
  assignment?: Assignment;
  assignmentMarks: AssignmentMark[] = [];
  clss!: InstituteClass;
  markToUpdate?: AssignmentMark;

  displayedColumns: string[] = ['name', 'mark', 'status', 'action'];

  marksControl = new FormControl(0, Validators.max(this.assignment ? this.assignment.totalMarks : 100));

  constructor(
    private api: ApiClientService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.assignmentId = id;
      this.store.select(state => state.class).subscribe(clss => this.clss = clss[0]);
      this.getAssignment();
    } else {
      this.router.navigate(['home']);
    }
  }

  getAssignment () {
    this.api.getAssignmentById(this.assignmentId).subscribe({
      next: assignment => {
        this.assignment = assignment;
        this.getAssignmentMarks();
      }
    })
  }

  getAssignmentMarks () {
    this.api.getAssignmentMarks(this.assignmentId).subscribe({
      next: res => this.assignmentMarks = this.generateMarks(res)
    })
  };

  generateMarks (existingMarks: AssignmentMark[]) {
    const noMarks = this.clss.students.filter(student => {
      return existingMarks.reduce((acc: boolean, currMark: AssignmentMark) => {
        if (currMark.student._id === student._id) return false;
        return acc;
      }, true)
    });

    const newMarks: AssignmentMark[] = noMarks.map(student => {
      return {
        assignment: this.assignment!,
        student,
        marksObtained: 0,
        status: 'pending'
      }
    });

    return [...existingMarks, ...newMarks];
  }

  selectMarkToUpdate (mark: AssignmentMark) {
    this.markToUpdate = mark; 
    this.marksControl.setValue(mark.marksObtained);
  };

  removeSelect () {
    this.markToUpdate = undefined;
  };

  handleSubmitMark (assignmentMark: AssignmentMark) {
    const { assignment, student } = assignmentMark;
    const marksObtained = this.marksControl.value!;

    this.api.addAssignmentMark(assignment, student, marksObtained).subscribe({
      next: res => {
        this.markToUpdate = undefined;
        this.assignmentMarks = this.assignmentMarks.map(marks => {
          if (marks.student.email === res.student.email) {
            marks = res;
          }
          return marks;
        });
      }
    });
  }

}
