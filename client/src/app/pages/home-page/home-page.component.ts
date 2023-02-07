import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Institute } from 'src/app/models/institute.model';
import { State } from 'src/app/models/state.model';
import { User } from 'src/app/models/user.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { NewInstituteService } from 'src/app/services/new-institute/new-institute.service';
import { RemoveInstituteAction } from 'src/app/store/actions/institute.action';
import { CreateInstitutePageComponent } from '../create-institute-page/create-institute-page.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user!: User;
  institutes: Institute[] = [];
  adminInstitutes: Institute[] = [];
  otherInstitutes: Institute[] = [];

  constructor(
    private store: Store<State>, 
    private api: ApiClientService,
    private dialog: MatDialog,
    private newInstitute: NewInstituteService
    ) { 
    
  }

  ngOnInit(): void {
    const user$ = this.store.select(store => store.user);
    user$.subscribe(userArr => this.user = userArr[0]);
    this.store.dispatch(RemoveInstituteAction({payload: undefined}));

    this.getInstitutes();

    this.newInstitute.getNewInstitute().subscribe(institute => this.adminInstitutes.push(institute));
  }

  getInstitutes () {
    this.api.getUserInstitutes().subscribe(institutes => {
      this.institutes = institutes.map(res => res.institute);
      this.adminInstitutes = institutes.filter(res => res.type === 'admin').map(res => res.institute);
      this.otherInstitutes = institutes.filter(res => res.type !== 'admin').map(res => res.institute);
    });
  }

  handleNewInstituteClick () {
    const dialogRef = this.dialog.open(CreateInstitutePageComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
