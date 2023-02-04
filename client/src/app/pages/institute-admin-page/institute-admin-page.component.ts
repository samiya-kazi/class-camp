import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InstituteClass } from 'src/app/models/class.model';
import { Institute } from 'src/app/models/institute.model';
import { State } from 'src/app/models/state.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

@Component({
  selector: 'app-institute-admin-page',
  templateUrl: './institute-admin-page.component.html',
  styleUrls: ['./institute-admin-page.component.css'],
})
export class InstituteAdminPageComponent implements OnInit {

  institute!: Institute;
  classes : InstituteClass[] = [];

  constructor(
    private store: Store<State>,
    private api: ApiClientService) { }

  ngOnInit(): void {
    const institute$ = this.store.select(store => store.institute);
    institute$.subscribe(institute => this.institute = institute);
    this.getClasses();
  }

  getClasses () {
    if (this.institute._id)
      this.api.getClasses(this.institute._id).subscribe(classes => this.classes = classes)
  }

}
