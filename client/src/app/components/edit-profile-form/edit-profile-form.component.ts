import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/models/state.model';
import { User } from 'src/app/models/user.model';

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
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    profile_pic_url: ''
  })

  constructor (
    private store: Store<State>,
    private fb: FormBuilder
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
}
