import { Component,OnInit, OnDestroy } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { AuthService } from './servicios/auth/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{


  title = 'my proyecto'

  habilitado = true

  usuario = {
    nombre:'Jonathan',
    apellido:'Vargas',
    direccion:{
      casa:'oe13-371'
    }
  }

  arregloUsuarios = []

  arregloObservables = []

  constructor(private _service:UsuarioService, public readonly _authService:AuthService){


  }

  arregloPeliculas =[
    {
      id:1,
      url:'https://i.ytimg.com/vi/aHeOQSB9rfY/maxresdefault.jpg',
      descripcion:'pelicula de terror 2019',
      nombrePelicula:'SICCIN'

    },
    {
      id:2,
      url:'https://i.pinimg.com/originals/9a/3a/d9/9a3ad976b7f89df69e59550f8ca0053d.jpg',
      descripcion:'pelicula de terror 2020',
      nombrePelicula:'ANNABELLE'

    },
    {
      id:3,
      url:'https://i.pinimg.com/736x/fd/f0/fa/fdf0fadfaf8c542516321aaa34f38089.jpg',
      descripcion:'pelicula de terror 2015',
      nombrePelicula:'RUST'

    }
  ]

  arregloNumeros = [1,2,3]


  ngOnInit(): void {
    this.mensajeConsola(true)
  }

  ngOnDestroy(): void {

    //es necesario que te desuscribas a una suscripcion. Eso se lo hace en el metodo OnDestroy
    console.log('destroy');

    this.arregloObservables.forEach(
      (suscripcion)=>{
        suscripcion.unsubscribe();
      }
    )

  }

  mensajeConsola(objeto:boolean){
    console.log('llego el evento:', objeto);

    const observableTraerTodos = this._service.traerTodos()

    const suscripcion = observableTraerTodos.subscribe(
      (data)=>{

        this.arregloUsuarios = data as any[]
        console.log(data);

      },(error)=>{
        console.error(error)
      }
    )
      this.arregloObservables.push(suscripcion)

      // this.arregloObservables.push(suscripcion);
      // this.arregloObservables.forEach(
      //   (suscripcion)=>{
      //     suscripcion.unsubscribe();
      //   }
      // )
      // suscripcion.unsubscribe();
  }

  creaUsuario(){
    const usuarioNuevo={
      cedula:'1881441245',
      nombre:'Orochimaru',
      apellido:'Snake'
    }

    this._service.crearr(usuarioNuevo).subscribe((datos)=>{

      console.log('nuevo usuario', datos);
      this.mensajeConsola(true)


    },(error)=>{
      console.error(error)
    })
  }

  // OnDestriy(){
  //   this.arregloUsuarios.forEach((subscribe)=>{
  //     subscribe.unsubscribe()
  //   })
  //
  // }



}
