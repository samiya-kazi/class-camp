import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentMark } from 'src/app/models/assignmentMark.model';
import { InstituteUser } from 'src/app/models/institute-user.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

@Component({
  selector: 'app-assignment-card',
  templateUrl: './assignment-card.component.html',
  styleUrls: ['./assignment-card.component.css']
})
export class AssignmentCardComponent implements OnInit {

  @Input() assignment! : Assignment;
  @Input() instituteUser!: InstituteUser;

  assignmentMarks? : AssignmentMark; 

  constructor(private api: ApiClientService) { }

  ngOnInit(): void {
    this.getMarksForAssignment();
  }

  getMarksForAssignment () {
    if (this.instituteUser.type === 'student') {
      this.api.getAssignmentMarkForUser(this.assignment._id).subscribe({
        next: marks => {
          if (marks) this.assignmentMarks = marks;
        }
      })
    }
  }
}
