import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { InstituteReducer } from './store/reducers/institute.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserReducer } from './store/reducers/user.reducer';
import { StorageTokenInterceptorService } from './services/interceptors/storage-token-interceptor/storage-token-interceptor.service';
import { AccessTokenInterceptorService } from './services/interceptors/access-token-interceptor/access-token-interceptor.service';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { InstitutePageComponent } from './pages/institute-page/institute-page.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MaterialModule,
    StoreModule.forRoot({institute: InstituteReducer, user: UserReducer})
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
