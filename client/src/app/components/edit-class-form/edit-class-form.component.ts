import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { InstituteClass } from 'src/app/models/class.model';
import { State } from 'src/app/models/state.model';
import { AdminApiClientService } from 'src/app/services/admin-api-client/admin-api-client.service';
import { UpdateInstituteClassesService } from 'src/app/services/update-institute-classes/update-institute-classes.service';

@Component({
  selector: 'app-edit-class-form',
  templateUrl: './edit-class-form.component.html',
  styleUrls: ['./edit-class-form.component.css']
})
export class EditClassFormComponent implements OnInit {

  class! : InstituteClass;

  editClassForm = this.fb.group({
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
    private store: Store<State>,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const class$ = this.store.select(store => store.class);
    class$.subscribe(values => {
      this.editClassForm.patchValue(values[0]);
      this.class = values[0]
    })
  }

  get name () {return this.editClassForm.get('name')}
  get section () {return this.editClassForm.get('section')}

  handleSubmit () {
    if (this.editClassForm.valid && this.editClassForm.value.name && this.editClassForm.value.section) {
      const { name, description, section, img_url } = this.editClassForm.value;
      const desc = description ? description : '';
      const img = img_url ? img_url : '';
      this.adminApi.editClass(this.class._id, name, section, desc, img).subscribe({
        next: clss => {
          this.errorMessage = '';
          this.updateClasses.editClass(clss);
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
    this.editClassForm.get('img_url')?.setValue(url);
  }
}
