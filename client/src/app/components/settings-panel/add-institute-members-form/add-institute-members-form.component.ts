import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdminApiClientService } from 'src/app/services/admin-api-client/admin-api-client.service';

@Component({
  selector: 'app-add-institute-members-form',
  templateUrl: './add-institute-members-form.component.html',
  styleUrls: ['./add-institute-members-form.component.css']
})
export class AddInstituteMembersFormComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  role = new FormControl('', [Validators.required]);
  errorMessage = '';

  constructor(
    private adminApi: AdminApiClientService
  ) { }

  ngOnInit(): void {
  }

  handleSubmit () {
    if (this.email.valid && this.role.valid) {
      this.adminApi.addInstituteUser(this.email.value!, this.role.value!).subscribe(res => console.log(res));
    }
  }
}
