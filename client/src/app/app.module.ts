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
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { InstitutePageComponent } from './pages/institute-page/institute-page.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { CreateInstitutePageComponent } from './pages/create-institute-page/create-institute-page.component';
import { AdminModule } from './modules/admin/admin.module';
import { NavModule } from './modules/nav/nav.module';
import { RemoveClassDialogComponent } from './components/remove-class-dialog/remove-class-dialog.component';
import { SharedComponentsModule } from './modules/shared-components/shared-components.module';
import { InstituteUserReducer } from './store/reducers/instituteUser.reducer';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    BannerComponent,
    InstitutePageComponent,
    ClassPageComponent,
    PostCardComponent,
    CommentCardComponent,
    CreateInstitutePageComponent,
    RemoveClassDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MaterialModule,
    AdminModule,
    NavModule,
    SharedComponentsModule,
    StoreModule.forRoot({
      institute: InstituteReducer, 
      user: UserReducer,
      class: ClassReducer,
      instituteUser: InstituteUserReducer
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
