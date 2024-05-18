import { FullCalendarModule } from '@fullcalendar/angular';
import { NgModule } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListatareasComponent } from './components/listatareas/listatareas.component';
import { FormsModule } from '@angular/forms';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { TareasFavoritasComponent } from './components/tareasFavoritas/tareasFavoritas.component';
import { TareasRoutingModule } from './tareas-routing.module';
import { PaginaprincipaltareasComponent } from './page/paginaprincipaltareas/paginaprincipaltareas.component';
import { ListatareasterminadasComponent } from './components/listatareasterminadas/listatareasterminadas.component';
import { MaterialModule } from '../../shared/module/material/material.module';


@NgModule({
  declarations: [	
    FormularioComponent,
    ListatareasComponent,
    CalendarioComponent,
    TareasFavoritasComponent,
    PaginaprincipaltareasComponent,
    ListatareasterminadasComponent
   ],
  imports: [
    TareasRoutingModule,
    FullCalendarModule,
    MaterialModule
  ],
  exports: [
    PaginaprincipaltareasComponent
  ]
})
export class TareasModule { }