import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/models/state.model';
import { User } from 'src/app/models/user.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { SetUserAction } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent {

  user! : User;

  editProfileForm = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    profile_pic_url: ''
  })

  constructor (
    private store: Store<State>,
    private fb: FormBuilder,
    private api: ApiClientService,
    private toastr: ToastrService
  ) {}

  ngOnInit () {
    this.store.select(store => store.user).subscribe(userArr => {
      this.user = userArr[0];
      this.editProfileForm.patchValue(this.user);
    });
  }

  handleFileUpload (url: string) {
    this.editProfileForm.get('profile_pic_url')?.setValue(url);
  }

  handleSubmit () {
    console.log(this.editProfileForm.valid)
    if (this.editProfileForm.valid) {
      const { firstName, lastName, email, profile_pic_url } = this.editProfileForm.value;
      this.api.editProfile(firstName!, lastName!, email!, profile_pic_url!).subscribe({
        next: res => {
          this.store.dispatch(SetUserAction({payload: res}));
          this.toastr.success('Profile has been updated', 'Updated', {positionClass: 'toast-bottom-right'});
        },
        error: error => {
          this.toastr.error(error.error, 'Error encountered', {positionClass: 'toast-bottom-right'})
        }
      })
    }
  }
}
