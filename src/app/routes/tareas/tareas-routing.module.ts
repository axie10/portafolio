import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListatareasComponent } from './components/listatareas/listatareas.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TareasFavoritasComponent } from './components/tareasFavoritas/tareasFavoritas.component';
import { PaginaprincipaltareasComponent } from './page/paginaprincipaltareas/paginaprincipaltareas.component';


const routes: Routes = [

  {
    path: 'tareas',
    component: PaginaprincipaltareasComponent,
    children: [
      {
        path: '',
        component: ListatareasComponent
      },
      {
        path: 'calendario',
        component: CalendarioComponent
      },
      {
        path: 'añadirtarea',
        component: FormularioComponent
      },
      {
        path: 'favoritas',
        component: TareasFavoritasComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }