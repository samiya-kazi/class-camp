import { Component, Input, OnInit } from '@angular/core';
import { InstituteClass } from 'src/app/models/class.model';
import { Institute } from 'src/app/models/institute.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @Input() institute!: Institute;

  classes: InstituteClass[] = [];

  constructor(private api: ApiClientService) { }

  ngOnInit(): void {
  }

  getClasses () {
    this.api.getClasses(this.institute._id).subscribe(classes => this.classes = classes);
  }

}
