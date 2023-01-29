import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/models/state.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RemoveUserAction } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn = false;

  constructor(private store: Store<State>, private auth: AuthService) { }

  ngOnInit(): void {
    const user$ = this.store.select(store => store.user);
    user$.subscribe(userArr => {
      this.loggedIn = userArr.length ? true : false;
    })
  }

  handleLogout () {
    this.auth.logout();
  }

}
