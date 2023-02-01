import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { InstituteClass } from 'src/app/models/class.model';
import { Institute } from 'src/app/models/institute.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { SetInstituteAction } from 'src/app/store/actions/institute.action';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @Input() item!: Institute | InstituteClass;

  classes: InstituteClass[] = [];

  constructor(
    private api: ApiClientService, 
    private store: Store,
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

  onInstituteClick () {
    if (this.instanceOfInstitute(this.item))
    this.store.dispatch(SetInstituteAction({payload: this.item}));
    this.router.navigateByUrl(`/institute/${this.item._id}`);
  }

}
