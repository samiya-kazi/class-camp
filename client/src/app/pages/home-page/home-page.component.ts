import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Institute } from 'src/app/models/institute.model';
import { State } from 'src/app/models/state.model';
import { User } from 'src/app/models/user.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { RemoveInstituteAction } from 'src/app/store/actions/institute.action';

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
    private router: Router
    ) { 
    
  }

  ngOnInit(): void {
    const user$ = this.store.select(store => store.user);
    user$.subscribe(userArr => this.user = userArr[0]);
    this.store.dispatch(RemoveInstituteAction({payload: undefined}));

    this.getInstitutes();
  }

  getInstitutes () {
    this.api.getUserInstitutes().subscribe(institutes => {
      console.log(institutes)
      this.institutes = institutes.map(res => res.institute);
      this.adminInstitutes = institutes.filter(res => res.type === 'admin').map(res => res.institute);
      this.otherInstitutes = institutes.filter(res => res.type !== 'admin').map(res => res.institute);
    });
  }

  handleNewInstituteClick () {
    this.router.navigate(['create/institute']);
  }

}
