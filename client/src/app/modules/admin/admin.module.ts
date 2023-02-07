import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClassFormComponent } from 'src/app/components/add-class-form/add-class-form.component';
import { AddClassMemberFormComponent } from 'src/app/components/class-members-manager/add-class-member-form/add-class-member-form.component';
import { ClassMembersManagerComponent } from 'src/app/components/class-members-manager/class-members-manager.component';
import { AddInstituteMembersFormComponent } from 'src/app/components/settings-panel/add-institute-members-form/add-institute-members-form.component';
import { InstituteMembersManagerComponent } from 'src/app/components/settings-panel/institute-members-manager/institute-members-manager.component';
import { SettingsPanelComponent } from 'src/app/components/settings-panel/settings-panel.component';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';
import { InstituteAdminPageComponent } from 'src/app/pages/institute-admin-page/institute-admin-page.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayCardComponent } from 'src/app/components/display-card/display-card.component';
import { NavModule } from '../nav/nav.module';



@NgModule({
  declarations: [
    InstituteAdminPageComponent,
    ClassMembersManagerComponent,
    UserCardComponent,
    AddClassMemberFormComponent,
    SettingsPanelComponent,
    InstituteMembersManagerComponent,
    AddInstituteMembersFormComponent,
    AddClassFormComponent,
    DisplayCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavModule,
    MaterialModule
  ],
  exports: [
    InstituteAdminPageComponent,
    ClassMembersManagerComponent,
    UserCardComponent,
    AddClassMemberFormComponent,
    SettingsPanelComponent,
    InstituteMembersManagerComponent,
    AddInstituteMembersFormComponent,
    AddClassFormComponent,
    DisplayCardComponent
  ]
})
export class AdminModule { }
