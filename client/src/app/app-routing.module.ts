import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentPageComponent } from './pages/assignment-page/assignment-page.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';
import { CreateInstitutePageComponent } from './pages/create-institute-page/create-institute-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InstituteAdminPageComponent } from './pages/institute-admin-page/institute-admin-page.component';
import { InstitutePageComponent } from './pages/institute-page/institute-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { ClassGuard } from './services/class-guard/class.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'institute/:id', component: InstitutePageComponent, canActivate: [AuthGuard]},
  {path: 'create/institute', component: CreateInstitutePageComponent, canActivate: [AuthGuard]},
  {path: 'institute/:id/admin', component: InstituteAdminPageComponent, canActivate: [AuthGuard]},
  {path: 'class/:id', component: ClassPageComponent, canActivate: [AuthGuard, ClassGuard]},
  {path: 'assignment/:id', component: AssignmentPageComponent, canActivate: [AuthGuard, ClassGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
