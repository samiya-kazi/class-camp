import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputComponent } from 'src/app/components/input/file-input/file-input.component';
import { MiniSpinnerComponent } from 'src/app/components/loaders/mini-spinner/mini-spinner.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassMemberListComponent } from 'src/app/components/class-member-list/class-member-list.component';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';



@NgModule({
  declarations: [
    FileInputComponent,
    MiniSpinnerComponent,
    ClassMemberListComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FileInputComponent,
    MiniSpinnerComponent,
    ClassMemberListComponent,
    UserCardComponent
  ]
})
export class SharedComponentsModule { }
