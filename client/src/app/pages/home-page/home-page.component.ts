import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/models/state.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user!: User;

  constructor(private store: Store<State>) { 
    
  }

  ngOnInit(): void {
    const user$ = this.store.select(store => store.user);
    user$.subscribe(userArr => this.user = userArr[0]);
  }

}
