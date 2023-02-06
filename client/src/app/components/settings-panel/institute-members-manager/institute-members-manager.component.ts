import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { InstituteUser } from 'src/app/models/institute-user.model';
import { Institute } from 'src/app/models/institute.model';
import { State } from 'src/app/models/state.model';
import { AdminApiClientService } from 'src/app/services/admin-api-client/admin-api-client.service';
import { AddInstituteMembersFormComponent } from '../add-institute-members-form/add-institute-members-form.component';
import { NewInstituteMemberService } from 'src/app/services/new-institute-member/new-institute-member.service';

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
    private adminApi: AdminApiClientService,
    private dialog: MatDialog,
    private newMember: NewInstituteMemberService
  ) { }

  ngOnInit(): void {

    const institute$ = this.store.select(store => store.institute);
    institute$.subscribe(institute => {
      this.institute = institute;
      if (this.institute._id !== '0') this.getInstituteUsers();
    });

    this.newMember.getNewInstituteMember().subscribe(user => {
      this.instituteMembers.push(user);
    })

  }


  getInstituteUsers () {
    this.adminApi.getInstituteMembers(this.institute._id).subscribe(members => {
      this.instituteMembers = members;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddInstituteMembersFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
