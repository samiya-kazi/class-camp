import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InstituteClass } from 'src/app/models/class.model';
import { User } from 'src/app/models/user.model';
import { AdminApiClientService } from 'src/app/services/admin-api-client/admin-api-client.service';

@Component({
  selector: 'app-class-member-list',
  templateUrl: './class-member-list.component.html',
  styleUrls: ['./class-member-list.component.css']
})
export class ClassMemberListComponent {

  @Input() clss!: InstituteClass;
  @Input() isAdmin!: boolean;

  constructor (
    private adminApi: AdminApiClientService,
    private toastr: ToastrService
  ) {}


  handleRemoveUser (user: User) {
    this.adminApi.removeUserFromClass(this.clss._id, user).subscribe({
      next: clss => {
        this.toastr.info(user.firstName + ' ' + user.lastName, 'User removed from class', {positionClass: 'toast-bottom-right'})
        this.clss = clss;
      },
      error: error => {
        this.toastr.error(error.error, 'Error encountered', {positionClass: 'toast-bottom-right'})
      }
    })
  }
}
