import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstituteClass } from 'src/app/models/class.model';

@Component({
  selector: 'app-remove-class-dialog',
  templateUrl: './remove-class-dialog.component.html',
  styleUrls: ['./remove-class-dialog.component.css']
})
export class RemoveClassDialogComponent implements OnInit {

  clss!: InstituteClass;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.clss = this.data.class;
  }

}
