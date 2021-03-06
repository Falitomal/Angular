import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth) {}


canActivate() : Observable<boolean>{
    return this.afAuth.authState.pipe(
        map( auth => {
            if(!auth){
                this.router.navigate(['/login']);
                return false;
            }
            else{
                return true;
            }
        })
    )
}
}