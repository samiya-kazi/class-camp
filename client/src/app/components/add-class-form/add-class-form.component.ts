import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
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
    img_url: new FormControl(''),
  })

  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private adminApi: AdminApiClientService,
    private updateClasses: UpdateInstituteClassesService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  get name () {return this.addClassForm.get('name')}
  get section () {return this.addClassForm.get('section')}

  handleSubmit () {
    if (this.addClassForm.valid && this.addClassForm.value.name && this.addClassForm.value.section) {
      const { name, description, section, img_url } = this.addClassForm.value;
      const desc = description ? description : '';
      const img = img_url ? img_url : '';
      this.adminApi.addNewClass(name, section, desc, img).subscribe({
        next: clss => {
          this.errorMessage = '';
          this.updateClasses.setNewClass(clss);
          this.dialog.closeAll();
          this.toastr.success(clss.name , 'New class added successfully', {positionClass: 'toast-bottom-right'});
        },
        error: error => {
          this.errorMessage = error.error
        }
      })
    }
  }


  handleFileUpload (url: string) {
    this.addClassForm.get('img_url')?.setValue(url);
  }
}
