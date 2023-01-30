import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SetUserAction } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  errorMessage = '';

  loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store
    ) { }

  ngOnInit(): void {
  }

  handleSubmit () {
    const { email, password } = this.loginForm.value;
    if (email && password) {
      this.auth.login(email, password).subscribe({
        next: (res) => {
          const user = res.body;
          if (user) this.store.dispatch(SetUserAction({payload: user}));
          this.router.navigate(['home']);
        },
        error: err => {
          this.errorMessage = err.error;
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000)
        }
      });
    }
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

}
