import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { SideNavComponent } from 'src/app/components/side-nav/side-nav.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavBarComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavBarComponent,
    SideNavComponent
  ]
})
export class NavModule { }
