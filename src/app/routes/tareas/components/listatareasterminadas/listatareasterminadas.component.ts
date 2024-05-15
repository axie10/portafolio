import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../service/tareas.service';
import { Tareas } from '../../interface/tarea.interface';


@Component({
  selector: 'app-listatareasterminadas',
  templateUrl: './listatareasterminadas.component.html',
  styleUrls: ['./listatareasterminadas.component.css']
})
export class ListatareasterminadasComponent {

  constructor( private listadoTareas: TareasService) { }

  get listadotareas () {
    return [...this.listadoTareas.tareas];
  }

  borrarTarea(value:Tareas){
    console.log(value)
    this.listadoTareas.borrarTarea(value);
  }

}