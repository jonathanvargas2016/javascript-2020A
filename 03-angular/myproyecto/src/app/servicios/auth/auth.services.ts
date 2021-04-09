import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  estasAutenticado = false
  url = 'http://localhost:1337';
  roles = ['Administrador','Supervisor'];

  constructor(
    private readonly _http:HttpClient
  ) {  }


  login(correo:string,cedula:string){
    return this._http.get(
      this.url + '/Usuario?correo=' + correo + '&cedula=' + cedula
    )
  }


}
