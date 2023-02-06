import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminApiClientService } from 'src/app/services/admin-api-client/admin-api-client.service';
import { UpdateInstituteClassesService } from 'src/app/services/update-institute-classes/update-institute-classes.service';

@Component({
  selector: 'app-add-class-form',
  templateUrl: './add-class-form.component.html',
  styleUrls: ['./add-class-form.component.css']
})
export class AddClassFormComponent implements OnInit {

  addClassForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    section: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  })

  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private adminApi: AdminApiClientService,
    private updateClasses: UpdateInstituteClassesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  get name () {return this.addClassForm.get('name')}
  get section () {return this.addClassForm.get('section')}

  handleSubmit () {
    if (this.addClassForm.valid && this.addClassForm.value.name && this.addClassForm.value.section) {
      const { name, description, section } = this.addClassForm.value;
      const desc = description ? description : '';
      this.adminApi.addNewClass(name, section, desc).subscribe({
        next: clss => {
          this.errorMessage = '';
          this.updateClasses.setNewClass(clss);
          this.dialog.closeAll();
        },
        error: error => {
          this.errorMessage = error.error
        }
      })
    }
  }
}
