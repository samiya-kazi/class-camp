import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InstituteReducer } from './store/reducers/institute.reducer';
import { UserReducer } from './store/reducers/user.reducer';
import { ClassReducer } from './store/reducers/class.reducer';
import { StorageTokenInterceptorService } from './services/interceptors/storage-token-interceptor/storage-token-interceptor.service';
import { AccessTokenInterceptorService } from './services/interceptors/access-token-interceptor/access-token-interceptor.service';
import { MaterialModule } from './modules/material/material.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { InstitutePageComponent } from './pages/institute-page/institute-page.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { CreateInstitutePageComponent } from './pages/create-institute-page/create-institute-page.component';
import { InstituteAdminPageComponent } from './pages/institute-admin-page/institute-admin-page.component';
import { ClassMembersManagerComponent } from './components/class-members-manager/class-members-manager.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { AddClassMemberFormComponent } from './components/class-members-manager/add-class-member-form/add-class-member-form.component';
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { InstituteMembersManagerComponent } from './components/settings-panel/institute-members-manager/institute-members-manager.component';
import { AddInstituteMembersFormComponent } from './components/settings-panel/add-institute-members-form/add-institute-members-form.component';
import { AddClassFormComponent } from './components/add-class-form/add-class-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    HomePageComponent,
    BannerComponent,
    SideNavComponent,
    DisplayCardComponent,
    InstitutePageComponent,
    ClassPageComponent,
    PostCardComponent,
    CommentCardComponent,
    CreateInstitutePageComponent,
    InstituteAdminPageComponent,
    ClassMembersManagerComponent,
    UserCardComponent,
    AddClassMemberFormComponent,
    SettingsPanelComponent,
    InstituteMembersManagerComponent,
    AddInstituteMembersFormComponent,
    AddClassFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MaterialModule,
    StoreModule.forRoot({
      institute: InstituteReducer, 
      user: UserReducer,
      class: ClassReducer
    }),
    ToastrModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptorService, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: StorageTokenInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
