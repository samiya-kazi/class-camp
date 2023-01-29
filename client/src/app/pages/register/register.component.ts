import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hidePass = true;
  hideConfirmPass = true;

  errorMessage = '';
  success = false;

  registerForm = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(
    private auth: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }


  handleSubmit () {
    const { firstName, lastName, email, password, confirmPassword } = this.registerForm.value;
    if(firstName && lastName && email && password && password && (password === confirmPassword) && password.length > 5) {
      this.auth.register(firstName, lastName, email, password).subscribe({
        next: () => {
          this.success = true;
          this.registerForm.reset;
        },
        error: err => {
          this.errorMessage = err.error;
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000)
        }
      })
    }
  }



  get firstName() { return this.registerForm.get('firstName'); }

  get lastName() { return this.registerForm.get('lastName'); }

  get email() { return this.registerForm.get('email'); }

  get password() { return this.registerForm.get('password'); }

  get confirmPassword() { return this.registerForm.get('confirmPassword'); }


}
