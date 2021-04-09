import { RouterModule, Routes } from '@angular/router';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaListaUsuarioComponent } from './rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import { EstasLogeadoGuard } from './servicios/guards/estas-logeado.guard';
import { EsAdministradorGuard } from './servicios/guards/es-administrador.guard';
import { EsSupervisorGuard } from './servicios/guards/es-supervisor';

const app_routes: Routes = [
  { path: 'inicio', component: RutaInicioComponent },
  { path: 'login', component: RutaLoginComponent },
  { path: 'usuario', component:  RutaUsuarioComponent,canActivate:[EstasLogeadoGuard],
  children:[
    { path: 'lista', component: RutaListaUsuarioComponent },
    { path: 'crear', component: RutaCrearUsuarioComponent, canActivate:[EsSupervisorGuard] },
    { path: 'editar/:id', component: RutaEditarUsuarioComponent,canActivate:[EsAdministradorGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'lista' },
  ]},

  // { path: '**', pathMatch: 'full', redirectTo: 'inicio' } para pagina no encontrada
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
];

export const Rutas_routing = RouterModule.forRoot(app_routes);
