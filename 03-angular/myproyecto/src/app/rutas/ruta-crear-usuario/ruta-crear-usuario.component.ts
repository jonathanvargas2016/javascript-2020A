import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-crear-usuario',
  templateUrl: './ruta-crear-usuario.component.html',
  styleUrls: ['./ruta-crear-usuario.component.css']
})
export class RutaCrearUsuarioComponent implements OnInit {

  constructor(
    private readonly _usuarioService:UsuarioService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(usuario){
    const observableCrear = this._usuarioService.crearr(usuario)

    observableCrear.subscribe((datos)=>{
    this.router.navigateByUrl('/usuario/lista')  
    },(error)=>{
      console.error(error);

    })


  }

}
