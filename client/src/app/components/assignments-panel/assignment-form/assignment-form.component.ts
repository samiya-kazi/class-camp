import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { UpdateAssignmentsService } from 'src/app/services/update-assignments/update-assignments.service';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {

  addAssignmentForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    totalMarks: new FormControl(100, [Validators.required]),
    dueDate: new FormControl(new Date())
  });

  noDueDate = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private updateAssignments: UpdateAssignmentsService,
    private fb: FormBuilder,
    private api: ApiClientService
  ) { }

  ngOnInit(): void {
  }

  handleNoDateChange (event: MatCheckboxChange ) {
    if (event.checked) {
      this.addAssignmentForm.get('dueDate')?.disable();
      this.noDueDate = true;
    } 
    else {
      this.addAssignmentForm.get('dueDate')?.enable();
      this.noDueDate = false;
    }
  }

  handleSubmit () {
    const {name, description, totalMarks, dueDate} = this.addAssignmentForm.value;
    this.api.addAssignment(this.data.classId, name!, description!, totalMarks!, dueDate!).subscribe({
      next: newAssignment => {
        this.updateAssignments.setNewAssignment(newAssignment);
        this.dialog.closeAll();
      }
    })
  }
}
