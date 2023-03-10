import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddClassMemberFormComponent } from './add-class-member-form/add-class-member-form.component';
import { InstituteClass } from 'src/app/models/class.model';
import { User } from 'src/app/models/user.model';
import { State } from 'src/app/models/state.model';
import { Store } from '@ngrx/store';
import { SetClassAction } from 'src/app/store/actions/class.action';
import { UpdateClassMembersService } from 'src/app/services/update-class-members/update-class-members.service';
import { AdminApiClientService } from 'src/app/services/admin-api-client/admin-api-client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-class-members-manager',
  templateUrl: './class-members-manager.component.html',
  styleUrls: ['./class-members-manager.component.css']
})
export class ClassMembersManagerComponent implements OnInit {

  classForm = this.fb.group({
    class: new FormControl()
  })

  selectedClass: InstituteClass = {
    _id: '0',
    name: 'default',
    section: 'default',
    description: 'default',
    institute: {
      _id: '0',
      name: 'default',
      type: 'default',
      description: '',
      img_url: ''
    },
    img_url: '',
    teacher: [],
    students: []
  };


  @Input() classes!: InstituteClass[];


  constructor(
    private fb: FormBuilder,
    private store: Store<State>, 
    private dialog: MatDialog,
    private updateClass: UpdateClassMembersService,
    private adminApi: AdminApiClientService,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.classForm.valueChanges.subscribe(values => {
      this.selectedClass = values.class;
      this.store.dispatch(SetClassAction({payload: this.selectedClass}));
    });


    this.updateClass.getUpdatedClass().subscribe(clss => this.selectedClass = clss);
  }

  handleRemoveUser (user: User) {
    this.adminApi.removeUserFromClass(this.selectedClass._id, user).subscribe({
      next: clss => {
        this.toastr.info(user.firstName + ' ' + user.lastName, 'User removed from class', {positionClass: 'toast-bottom-right'})
        this.selectedClass = clss;
      },
      error: error => {
        this.toastr.error(error.error, 'Error encountered', {positionClass: 'toast-bottom-right'})
      }
    })
  }

  openDialog() {
    this.dialog.open(AddClassMemberFormComponent);
  }

}