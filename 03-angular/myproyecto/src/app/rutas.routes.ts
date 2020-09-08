import { RouterModule, Routes } from '@angular/router';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';

const app_routes: Routes = [
  { path: 'inicio', component: RutaInicioComponent },
  { path: 'login', component: RutaLoginComponent },
  // { path: '**', pathMatch: 'full', redirectTo: 'inicio' } para pagina no encontrada
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
];

export const Rutas_routing = RouterModule.forRoot(app_routes);
