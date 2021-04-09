import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './components/carta-pelicula/carta-pelicula.component';
import { UsuarioService } from './usuario.service';
import {HttpClientModule} from '@angular/common/http';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaDetalleUsuarioComponent } from './rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';
import { Rutas_routing } from './rutas.routes';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaListaUsuarioComponent } from './rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './servicios/auth/auth.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstasLogeadoGuard } from './servicios/guards/estas-logeado.guard';
import { EsSupervisorGuard } from './servicios/guards/es-supervisor';
import { EsAdministradorGuard } from './servicios/guards/es-administrador.guard';

@NgModule({
  declarations: [

    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent,
    RutaCrearUsuarioComponent,
    RutaListaUsuarioComponent,
    RutaEditarUsuarioComponent,
    RutaUsuarioComponent,
    FormularioComponent
  ],
  imports: [
    Rutas_routing,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, //Animaciones
    MatButtonModule, //boton de angular material
    NgbModule, //modulo de bootstrap,
    //ButtonModule

  ],
  providers: [UsuarioService,AuthService,EstasLogeadoGuard,EsSupervisorGuard,EsAdministradorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
