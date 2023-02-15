import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { InstituteClass } from 'src/app/models/class.model';
import { InstituteUser } from 'src/app/models/institute-user.model';
import { State } from 'src/app/models/state.model';
import { User } from 'src/app/models/user.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { SetInstituteUserAction } from 'src/app/store/actions/instituteUser.action';

@Component({
  selector: 'app-institute-page',
  templateUrl: './institute-page.component.html',
  styleUrls: ['./institute-page.component.css']
})
export class InstitutePageComponent implements OnInit {

  instituteId! : string | null;
  classes: InstituteClass[] = [];
  user! : User;
  instituteUser!: InstituteUser;

  constructor(
    private route: ActivatedRoute, 
    private api: ApiClientService,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.instituteId = this.route.snapshot.paramMap.get('id');
    const user$ = this.store.select(store => store.user);
    user$.subscribe(userArr => {
      this.user = userArr[0];
      this.getUserRole();
    });

    const instituteUser$ = this.store.select(store => store.instituteUser);
    instituteUser$.subscribe(instituteUserArr => {
      this.instituteUser = instituteUserArr[0]; 
      this.getClasses();
    });

  }

  getClasses () {
    if (this.instituteId)
      this.api.getClasses(this.instituteId).subscribe(classes => {
        if (this.instituteUser.type === 'admin') this.classes = classes;
        else this.classes = classes.filter(clss => (this.searchUser(clss.teacher, this.user) || (this.searchUser(clss.students, this.user))));
      })
  }

  getUserRole () {
    if (this.user._id && this.instituteId)
    this.api.getUserRole(this.user._id, this.instituteId!).subscribe({
      next: res => {
        this.store.dispatch(SetInstituteUserAction({payload: res}));
      }
    })
  }

  searchUser (userArr: User[], user: User) {
    let flag = false;
    userArr.forEach(u => {
      if (u._id === user._id) flag = true;
    });

    return flag;
  }

}
