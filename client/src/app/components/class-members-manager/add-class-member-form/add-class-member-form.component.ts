import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, startWith } from 'rxjs';
import { InstituteClass } from 'src/app/models/class.model';
import { InstituteUser } from 'src/app/models/institute-user.model';
import { Institute } from 'src/app/models/institute.model';
import { State } from 'src/app/models/state.model';
import { AdminApiClientService } from 'src/app/services/admin-api-client/admin-api-client.service';

@Component({
  selector: 'app-add-class-member-form',
  templateUrl: './add-class-member-form.component.html',
  styleUrls: ['./add-class-member-form.component.css']
})
export class AddClassMemberFormComponent implements OnInit {

  instituteMembers: InstituteUser[] = [];
  institute!: Institute;
  class!: InstituteClass;

  myControl = new FormControl<string | InstituteUser>('', [Validators.required]);
  filteredOptions!: Observable<InstituteUser[]>;

  constructor(
    private adminApi: AdminApiClientService,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    const institute$ = this.store.select(store => store.institute);
    institute$.subscribe(institute => {
      this.institute = institute;
      if (this.institute._id !== '0') this.getInstituteUsers();
    });

    const class$ = this.store.select(store => store.class);
    class$.subscribe(classArr => this.class = classArr[0]);

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.user.firstName;
        return name ? this._filter(name as string) : this.instituteMembers.slice();
      }),
    );
  }

  getInstituteUsers () {
    this.adminApi.getInstituteMembers(this.institute._id).subscribe(members => {
      this.instituteMembers = members;
    })
  }

  displayFn(user: InstituteUser): string {
    return user ? user.user.firstName + ' ' + user.user.lastName : '';
  }

  private _filter(name: string): InstituteUser[] {
    const filterValue = name.toLowerCase();

    return this.instituteMembers.filter(option => {
      return (option.user.firstName + ' ' + option.user.lastName).toLowerCase().includes(filterValue) || option.user.email.toLowerCase().includes(filterValue)
    });
  }

  handleSubmit () {
    if (this.myControl.value && typeof this.myControl.value !== 'string') {
      console.log(this.class)
      this.adminApi.addUserToClass(this.class._id, this.myControl.value.user).subscribe(res => console.log(res))
    }
  }

}
