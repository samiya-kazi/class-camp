import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InstituteClass } from 'src/app/models/class.model';
import { State } from 'src/app/models/state.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ClassGuard implements CanActivate {

  user! : User;
  clss! : InstituteClass;

  constructor (private store: Store<State>, private router: Router) {
    const user$ = this.store.select(store => store.user);
    user$.subscribe(userArr => {
      this.user = userArr[0];
    });
    
    const class$ = this.store.select(store => store.class);
    class$.subscribe(clssArr => {
      this.clss = clssArr[0]; 
    });

    console.log('User: ', this.user);
    console.log('Class: ', this.clss);

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.searchUser(this.clss.teacher, this.user) || (this.searchUser(this.clss.students, this.user))) {
        return true;
      } else {
        this.router.navigate(['home']);
        return false;
      }
  }

  searchUser (userArr: User[], user: User) {
    let flag = false;
    userArr.forEach(u => {
      if (u._id === user._id) flag = true;
    });

    return flag;
  }
  
}
