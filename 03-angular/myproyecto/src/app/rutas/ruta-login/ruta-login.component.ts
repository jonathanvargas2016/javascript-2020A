import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.services';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {


  correoModelo:string
  cedulaModelo:string

  constructor(readonly _authService:AuthService) {}

  ngOnInit(): void {
  }

  revisarLogin(formularioLogin){
    const obsLogin = this._authService.login(this.correoModelo,this.cedulaModelo)
    obsLogin.subscribe((arregloUsuarios:any)=>{

        if(arregloUsuarios.length > 0){
          this._authService.estasAutenticado = true;
        }else{
          this._authService.estasAutenticado = false
        }


    },(error)=>{
      console.error(error)
    })

  }

}
