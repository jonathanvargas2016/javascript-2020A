import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';
import {Observable} from 'rxjs';
import { AuthService } from '../auth/auth.services';

@Injectable()
export class EstasLogeadoGuard implements CanActivate {

  constructor(private readonly _authService:AuthService) {  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean |
    UrlTree> | Promise<boolean | UrlTree> {

      //logica boolean y a la final devolvemos un booleano
    if(this._authService.estasAutenticado){
      return true;
    }else{
      return false;
    }

  }


}
