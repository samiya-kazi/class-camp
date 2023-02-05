import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { InstituteClass } from 'src/app/models/class.model';
import { User } from 'src/app/models/user.model';

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


  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.classForm.valueChanges.subscribe(values => {
      this.selectedClass = values.class;
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

}
