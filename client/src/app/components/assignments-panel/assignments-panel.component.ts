import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Assignment } from 'src/app/models/assignment.model';
import { InstituteUser } from 'src/app/models/institute-user.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { UpdateAssignmentsService } from 'src/app/services/update-assignments/update-assignments.service';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';

@Component({
  selector: 'app-assignments-panel',
  templateUrl: './assignments-panel.component.html',
  styleUrls: ['./assignments-panel.component.css']
})
export class AssignmentsPanelComponent implements OnInit {

  @Input() classId!: string | null;
  @Input() instituteUser!: InstituteUser;

  assignments: Assignment[] = [];

  constructor(
    private api: ApiClientService,
    private updateAssignments: UpdateAssignmentsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAssignments();
    this.updateAssignments.getNewAssignment().subscribe(assignment => this.assignments.push(assignment));
  }

  getAssignments () {
    if (this.classId) this.api.getAssignments(this.classId).subscribe({
      next: res => this.assignments = res
    })
  }

  openDialog () {
    this.dialog.open(AssignmentFormComponent, {data: {classId: this.classId}});
  }

}
