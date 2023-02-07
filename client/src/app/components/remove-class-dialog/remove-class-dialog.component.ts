import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { InstituteClass } from 'src/app/models/class.model';
import { AdminApiClientService } from 'src/app/services/admin-api-client/admin-api-client.service';
import { UpdateInstituteClassesService } from 'src/app/services/update-institute-classes/update-institute-classes.service';

@Component({
  selector: 'app-remove-class-dialog',
  templateUrl: './remove-class-dialog.component.html',
  styleUrls: ['./remove-class-dialog.component.css']
})
export class RemoveClassDialogComponent implements OnInit {

  clss!: InstituteClass;
  confirmInput = new FormControl('');

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminApi: AdminApiClientService,
    private updateClasses: UpdateInstituteClassesService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.clss = this.data.class;
  }

  get confirm () {return this.confirmInput};

  handleConfirm () {
    this.adminApi.deleteClass(this.clss._id).subscribe({
      next: clss => {
        this.updateClasses.deleteClass(clss);
        this.dialog.closeAll();
        this.toastr.success(clss.name, 'Removed class successfully', {positionClass: 'toast-bottom-right'});
      }
    })
  }


  handleCancel () {
    this.dialog.closeAll();
  }
}
