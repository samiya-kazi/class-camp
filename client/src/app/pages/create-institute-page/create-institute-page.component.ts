import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { NewInstituteService } from 'src/app/services/new-institute/new-institute.service';

@Component({
  selector: 'app-create-institute-page',
  templateUrl: './create-institute-page.component.html',
  styleUrls: ['./create-institute-page.component.css']
})
export class CreateInstitutePageComponent implements OnInit {

  newInstituteForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    img_url: new FormControl(''),
  })

  errorMessage = '';

  constructor(
    private fb: FormBuilder, 
    private api: ApiClientService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private newInstitute: NewInstituteService
    ) { }

  ngOnInit(): void {
  }

  handleSubmit () {
    const { name, type, description, img_url } = this.newInstituteForm.value;
    if(name && type) this.api.addInstitute(name, type, description, img_url)
      .subscribe({
        next: (institute) => {
          this.newInstitute.setNewInstitute(institute);
          this.dialog.closeAll();
          this.toastr.success(institute.name, 'New Institute Created', {positionClass: 'toast-bottom-right'});
        },
        error: err => {
          this.errorMessage = err.error;
        }
      });
  }

  handleFileUpload (url: string) {
    this.newInstituteForm.get('img_url')?.setValue(url);
  }

  get name() {return this.newInstituteForm.get('name')};
  get type() {return this.newInstituteForm.get('type')};
}
