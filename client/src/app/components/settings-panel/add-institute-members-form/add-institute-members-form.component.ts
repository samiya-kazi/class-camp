import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdminApiClientService } from 'src/app/services/admin-api-client/admin-api-client.service';
import { NewInstituteMemberService } from 'src/app/services/new-institute-member/new-institute-member.service';

@Component({
  selector: 'app-add-institute-members-form',
  templateUrl: './add-institute-members-form.component.html',
  styleUrls: ['./add-institute-members-form.component.css']
})
export class AddInstituteMembersFormComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  role = new FormControl('', [Validators.required]);
  errorMessage = '';
  successMessage = '';

  constructor(
    private adminApi: AdminApiClientService,
    private newMember: NewInstituteMemberService
  ) { }

  ngOnInit(): void {
  }

  handleSubmit () {
    if (this.email.valid && this.role.valid) {
      this.adminApi.addInstituteUser(this.email.value!, this.role.value!).subscribe({
        next: newUser => {
          this.newMember.setNewInstituteMember(newUser);
          this.successMessage = 'User had been successfully added.';
          this.errorMessage = '';
        },
        error: error => {
          this.successMessage = '';
          this.errorMessage = error.error;
        }
      });
    }
  }
}
