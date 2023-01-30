import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { InstituteReducer } from './store/reducers/institute.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import { MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './pages/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserReducer } from './store/reducers/user.reducer';
import { BannerComponent } from './components/banner/banner.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AccessTokenInterceptorService } from './services/interceptors/access-token-interceptor/access-token-interceptor.service';
import { StorageTokenInterceptorService } from './services/interceptors/storage-token-interceptor/storage-token-interceptor.service';
import { DisplayCardComponent } from './components/display-card/display-card.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
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
