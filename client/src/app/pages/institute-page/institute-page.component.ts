import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstituteClass } from 'src/app/models/class.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

@Component({
  selector: 'app-institute-page',
  templateUrl: './institute-page.component.html',
  styleUrls: ['./institute-page.component.css']
})
export class InstitutePageComponent implements OnInit {

  instituteId! : string | null;
  classes: InstituteClass[] = [];

  constructor(private route: ActivatedRoute, private api: ApiClientService) { }

  ngOnInit(): void {
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getClasses();
  }

  getClasses () {
    if (this.instituteId)
      this.api.getClasses(this.instituteId).subscribe(classes => this.classes = classes)
  }

}
