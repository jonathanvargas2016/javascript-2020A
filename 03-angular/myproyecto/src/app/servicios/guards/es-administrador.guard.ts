import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';
import {Observable} from 'rxjs';
import { AuthService } from '../auth/auth.services';

@Injectable()
export class EsAdministradorGuard implements CanActivate {

  constructor(private readonly _authService:AuthService) {  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean |
    UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //logica boolean y a la final devolvemos un booleano
    const esAdministrador = this._authService.roles.some((rol)=>{
      return rol === 'Administrador'
    })
    return esAdministrador

  }

}
