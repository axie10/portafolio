import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { share } from 'rxjs';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path: 'portafolio',
    loadChildren: () => import('./paginaprincipal/paginaprincipal.module').then(m => m.PaginaprincipalModule)
  },
  {
    path: 'tiempo',
    loadChildren: () => import('./Tiempo/tiempo.module').then(m => m.TiempoModule),
    canActivate: [AuthGuard],
    canMatch: [AuthGuard]
  },
  {
    path: 'tareas',
    loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule)
  },
  {
    path: 'gifss',
    loadChildren: () => import('./gifs/gifss.module').then(m => m.GifssModule)
  },
  {
    path: 'banderas',
    loadChildren: () => import('./banderas/banderas.module').then(m => m.BanderasModule)
  },
  {
    path: 'selectoresmapa',
    loadChildren: () => import('./selectoresMapa/selectores-mapa.module').then(m => m.SelectoresMapaModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
