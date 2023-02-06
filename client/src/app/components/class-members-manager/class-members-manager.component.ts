import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AddClassMemberFormComponent } from './add-class-member-form/add-class-member-form.component';
import { InstituteClass } from 'src/app/models/class.model';
import { User } from 'src/app/models/user.model';
import { State } from 'src/app/models/state.model';
import { Store } from '@ngrx/store';
import { SetClassAction } from 'src/app/store/actions/class.action';

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
    },
    teacher: [],
    students: []
  };


  @Input() classes!: InstituteClass[];


  constructor(
    private fb: FormBuilder,
    private store: Store<State>, 
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.classForm.valueChanges.subscribe(values => {
      this.selectedClass = values.class;
      this.store.dispatch(SetClassAction({payload: this.selectedClass}));
    })
  }

  drop(event: CdkDragDrop<User[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddClassMemberFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}