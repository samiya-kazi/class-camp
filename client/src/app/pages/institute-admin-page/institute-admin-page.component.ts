import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { InstituteClass } from 'src/app/models/class.model';
import { Institute } from 'src/app/models/institute.model';
import { State } from 'src/app/models/state.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { SetInstituteAction } from 'src/app/store/actions/institute.action';

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
    private api: ApiClientService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    
    const institute$ = this.store.select(store => store.institute);
    institute$.subscribe(institute => {
      this.institute = institute;
      this.getClasses();
    });
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getInstitute(id);
    };
  }

  getClasses () {
    if (this.institute._id !== '0')
      this.api.getClasses(this.institute._id).subscribe(classes => {
        this.classes = classes;
    });  
  }
    
  getInstitute (id: string) {
    this.api.getInstituteById(id).subscribe(institute => {
      this.institute = institute;
      this.store.dispatch(SetInstituteAction({payload: this.institute}));
    });
  }

}
