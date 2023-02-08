import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/models/state.model';
import { AdminApiClientService } from 'src/app/services/admin-api-client/admin-api-client.service';

@Component({
  selector: 'app-edit-institute-form',
  templateUrl: './edit-institute-form.component.html',
  styleUrls: ['./edit-institute-form.component.css']
})
export class EditInstituteFormComponent implements OnInit {

  editInstituteForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    img_url: new FormControl(''),
  })

  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private adminApi: AdminApiClientService,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    const institute$ = this.store.select(store => store.institute);
    institute$.subscribe(institute => this.editInstituteForm.patchValue(institute));
  }

  handleSubmit () {
    const { name, type, description, img_url } = this.editInstituteForm.value;
    const desc = description ? description : '';
    const img = img_url ? img_url : '';
    if(name && type) this.adminApi.editInstitute(name, type, desc, img)
      .subscribe({
        next: (institute) => {
          this.dialog.closeAll();
          this.toastr.info(institute.name, 'Instiute updated', {positionClass: 'toast-bottom-right'});
        },
        error: err => {
          this.errorMessage = err.error;
        }
      });
  }

  handleFileUpload (url: string) {
    this.editInstituteForm.get('img_url')?.setValue(url);
  }

  get name() {return this.editInstituteForm.get('name')};
  get type() {return this.editInstituteForm.get('type')};

}
