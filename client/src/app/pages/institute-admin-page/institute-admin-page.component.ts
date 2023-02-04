import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Institute } from 'src/app/models/institute.model';
import { State } from 'src/app/models/state.model';

@Component({
  selector: 'app-institute-admin-page',
  templateUrl: './institute-admin-page.component.html',
  styleUrls: ['./institute-admin-page.component.css'],
})
export class InstituteAdminPageComponent implements OnInit {

  institute!: Institute;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    const institute$ = this.store.select(store => store.institute);
    institute$.subscribe(institute => this.institute = institute);
  }

}
