import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InstituteUser } from 'src/app/models/institute-user.model';
import { Institute } from 'src/app/models/institute.model';
import { State } from 'src/app/models/state.model';
import { AdminApiClientService } from 'src/app/services/admin-api-client/admin-api-client.service';

@Component({
  selector: 'app-institute-members-manager',
  templateUrl: './institute-members-manager.component.html',
  styleUrls: ['./institute-members-manager.component.css']
})
export class InstituteMembersManagerComponent implements OnInit {

  instituteMembers: InstituteUser[] = [];
  institute!: Institute;

  constructor(
    private store: Store<State>,
    private adminApi: AdminApiClientService
  ) { }

  ngOnInit(): void {

    const institute$ = this.store.select(store => store.institute);
    institute$.subscribe(institute => {
      this.institute = institute;
      if (this.institute._id !== '0') this.getInstituteUsers();
    });

  }


  getInstituteUsers () {
    this.adminApi.getInstituteMembers(this.institute._id).subscribe(members => {
      this.instituteMembers = members;
    })
  }

}
