
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsuarioService {



  url = 'http://localhost:1337'


  constructor(private readonly _http:HttpClient) {  }

  traerTodos(consulta?:string){

    return this._http.get(this.url+'/usuario?'+consulta)
  }

  //POST /UsuarioService
  crearr(usuario:any){
    return this._http.post(
      this.url+'/usuario', //ruta
      usuario // datos
    )
  }

  editar(usuario,id){
    return this._http.put(this.url+'/usuario/'+id,usuario)
  }

  obtenerUnoPorId(idUsuario:number){
    return this._http.get(this.url+'/usuario/'+idUsuario)
  }

  eliminar(idUsuario:number){
    return this._http.delete(this.url+'/usuario/'+idUsuario)
  }







}
