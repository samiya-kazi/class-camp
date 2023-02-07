import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputComponent } from 'src/app/components/input/file-input/file-input.component';
import { MiniSpinnerComponent } from 'src/app/components/loaders/mini-spinner/mini-spinner.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FileInputComponent,
    MiniSpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FileInputComponent,
    MiniSpinnerComponent
  ]
})
export class SharedComponentsModule { }
