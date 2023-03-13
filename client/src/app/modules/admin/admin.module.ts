import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { EditInstituteFormComponent } from 'src/app/components/settings-panel/edit-institute-form/edit-institute-form.component';
import { EditClassFormComponent } from '../../components/edit-class-form/edit-class-form.component';



@NgModule({
  declarations: [
    InstituteAdminPageComponent,
    ClassMembersManagerComponent,
    AddClassMemberFormComponent,
    SettingsPanelComponent,
    InstituteMembersManagerComponent,
    AddInstituteMembersFormComponent,
    AddClassFormComponent,
    DisplayCardComponent,
    EditInstituteFormComponent,
    EditClassFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavModule,
    MaterialModule,
    SharedComponentsModule,
  ],
  exports: [
    InstituteAdminPageComponent,
    ClassMembersManagerComponent,
    AddClassMemberFormComponent,
    SettingsPanelComponent,
    InstituteMembersManagerComponent,
    AddInstituteMembersFormComponent,
    AddClassFormComponent,
    DisplayCardComponent,
    EditInstituteFormComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AdminModule { }
