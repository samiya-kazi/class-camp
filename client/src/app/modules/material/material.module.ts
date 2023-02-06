import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    DragDropModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    DragDropModule,
    MatDialogModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }
