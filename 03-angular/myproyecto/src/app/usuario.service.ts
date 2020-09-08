
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsuarioService {



  url = 'http://localhost:1337'


  constructor(private readonly _http:HttpClient) {  }

  traerTodos(){
    return this._http.get(this.url+'/usuario')
  }

  //POST /UsuarioService
  crearr(usuario:any){
    return this._http.post(
      this.url+'/usuario', //ruta
      usuario // datos
    )
  }




}
