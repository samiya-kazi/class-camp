import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Institute } from './models/institute.model';
import { State } from './models/state.model';
import { SetInstituteAction } from './store/actions/institute.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class-camp';

  institute$: Observable<Institute> | undefined;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.institute$ = this.store.select((store) => store.institute);
  }

  handleClick () {
    this.store.dispatch(SetInstituteAction({payload: {_id: '123', name: 'Samiya Code', type: 'test'}}));
  }
}
