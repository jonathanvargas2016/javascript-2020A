import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UsuarioService } from 'src/app/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {

  usuario:any;
  mostrarFormulario = false

  constructor(
    private readonly _usuarioService:UsuarioService,
    private readonly _activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {

    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe((parametros)=>{
      const id = Number(parametros.id)
      const obsUsuario = this._usuarioService.obtenerUnoPorId(id)
      obsUsuario.subscribe((usuario:any)=>{
        this.usuario = usuario
        this.llenarDatosConDatosDeUsuario()
      },(error)=>{
        console.error(error)
      })
    })

  }

  llenarDatosConDatosDeUsuario(){
    this.mostrarFormulario = true
  }

  editarUsuario(usuario){
    const obsEditarUsuario = this._usuarioService.editar(usuario, this.usuario.id)
    obsEditarUsuario.subscribe((datos)=>{
      this.router.navigateByUrl('/usuario/lista')
    },(error)=>{
      console.error(error)
    })
  }

}
