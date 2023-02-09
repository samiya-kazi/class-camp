import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { InstituteClass } from 'src/app/models/class.model';
import { Institute } from 'src/app/models/institute.model';
import { State } from 'src/app/models/state.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { RemoveClassAction, SetClassAction } from 'src/app/store/actions/class.action';
import { SetInstituteAction } from 'src/app/store/actions/institute.action';
import { EditClassFormComponent } from '../edit-class-form/edit-class-form.component';
import { RemoveClassDialogComponent } from '../remove-class-dialog/remove-class-dialog.component';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @Input() item!: Institute | InstituteClass;
  @Input() isAdmin!: boolean;

  classes: InstituteClass[] = [];

  constructor(
    private api: ApiClientService, 
    private store: Store<State>,
    private dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses () {
    if(this.item && !this.instanceOfInstitute(this.item))
      this.api.getClasses(this.item._id).subscribe(classes => this.classes = classes);
  }

  instanceOfInstitute(data: any): data is Institute {
    return data.type;
  }

  instanceOfClass(data: any): data is InstituteClass {
    return data.institute;
  }

  onClick () {
    if (this.instanceOfInstitute(this.item)) {
      this.store.dispatch(SetInstituteAction({payload: this.item}));
      this.router.navigateByUrl(`/institute/${this.item._id}`);
    } else {
      this.router.navigateByUrl(`/class/${this.item._id}`);
      this.store.dispatch(SetClassAction({payload: this.item}))
    }
  }

  handleAdminNav () {
    if (this.instanceOfInstitute(this.item)) {
      this.store.dispatch(SetInstituteAction({payload: this.item}));
      this.router.navigateByUrl(`/institute/${this.item._id}/admin`);
    }
  }

  handleRemoveClassClick () {
    this.dialog.open(RemoveClassDialogComponent, {data: {class: this.item}});
  }

  handleEditClassClick () {
    if (this.instanceOfClass(this.item)) {
      this.store.dispatch(SetClassAction({payload: this.item}))
      const dialogRef = this.dialog.open(EditClassFormComponent);

      dialogRef.afterClosed().subscribe(() => this.store.dispatch(RemoveClassAction()));
    }
  }

}
