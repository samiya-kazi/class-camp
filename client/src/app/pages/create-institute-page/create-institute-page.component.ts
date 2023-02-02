import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

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
  })

  errorMessage = '';

  constructor(
    private fb: FormBuilder, 
    private api: ApiClientService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  handleSubmit () {
    const {name, type, description } = this.newInstituteForm.value;
    if(name && type) this.api.addInstitute(name, type, description)
      .subscribe({
        next: () => {this.router.navigate(['home']);},
        error: err => {
          this.errorMessage = err.error;
        }
      });
  }

  get name() {return this.newInstituteForm.get('name')};
  get type() {return this.newInstituteForm.get('type')};
}
