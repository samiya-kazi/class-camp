import { Component, OnInit } from '@angular/core';
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

  displayedColumns: string[] = ['name', 'mark', 'status', 'action'];

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
      next: res => {
        this.assignmentMarks = res
        const noMarks = this.clss.students.filter(student => {
          return res.reduce((acc: boolean, currMark: AssignmentMark) => {
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

        this.assignmentMarks = [...res, ...newMarks];
      }
    })
  }

}
