import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable()
export class VerifyTokenGuard implements CanActivate, CanActivateChild {
  constructor(
    public _userService: UserService
  ) {}
  canActivate(): Promise<boolean> | boolean {
    return this.checkExpiresToken();
  }
  // tslint:disable-next-line: max-line-length
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
  UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  debugger
    return this.checkExpiresToken();
  }
  verifyRenew(exp: number): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let tokenExp = new Date(exp * 1000);
      let now = new Date();
      now.setTime( now.getTime() + (1 * 60 * 60 * 1000));

      if ( tokenExp.getTime() > now.getTime() ) {
        resolve(true);
      } else {
        this._userService.renewToken()
            .subscribe( () => {
              resolve(true);
            }, () => {
              this._userService.logout();
              reject(false);
            });
      }
    });
  }
  private checkExpiresToken() {
    let token = this._userService.token;
    let payload = JSON.parse( atob( token.split('.')[1] ));
    let expiredToken = this.tokenEval(payload.exp);
    if (expiredToken) {
      this._userService.logout();
      return false;
    }
    console.log( payload);
    return this.verifyRenew(payload.exp);
  }
  private tokenEval( exp: number ) {
    let now = new Date().getTime() / 1000;
    if (exp < now) {
      return true;
    } else {
      return false;
    }
  }
}
