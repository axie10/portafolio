import { Component, OnInit } from '@angular/core';

import {v4 as uuid} from 'uuid';
import { TareasService } from '../../service/tareas.service';
import { Tareas } from '../../interface/tarea.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private listadoTareas: TareasService) { }

  //OBTENEMOS LA FECHA DEL MOMENTO QUE SE CREA LA TAREA
  //VAMOS SACANDO EL DIA, MES Y AÑO CON LAS FUNCIONES DEL TIPO 'DATE()'
  //Y RETORNAMOS UN STRING DE LA FECHA CREADA
  obtenerFecha():string{
    let fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const año = fechaActual.getFullYear();
    return `${dia}/${mes}/${año}`;
  }

  //GUARDAMOS EN LA PROPIEDAD DE NUESTRO OBJETO TAREA
  //EL STRING QUE HEMOS CREADO ANTES DE LA FECHA
  public Tarea : Tareas = {
    id: uuid(),
    nombre: '',
    descripcion: '',
    estado: 0,
    fecha: this.obtenerFecha(),
    favorita: 0,
    start: new Date(),
    title: ''
  };

  guardarTarea(){

    this.listadoTareas.guardarTarea(this.Tarea);
    // console.table(this.Tarea)

    this.Tarea = {
      id: uuid(),
      nombre: '',
      descripcion: '',
      estado: 0,
      fecha: this.obtenerFecha(),
      favorita : 0,
      start: new Date(),
      title: ''
    }

  }
 
}
