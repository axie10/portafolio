import { Component, OnInit } from '@angular/core';

import {v4 as uuid} from 'uuid';
import { TareasService } from '../../../../shared/services/tareas.service';
import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';

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
    //LE SUMO UNO AL MES PORQUE ENERO SALE COMO 0
    const mes = fechaActual.getMonth() + 1;
    const año = fechaActual.getFullYear();
    return `${año}-${mes}-${dia}`;
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

  //FUNCION PARA GUARDAR LA TAREA EN EL ARRAY DE TAREAS DEL LOCALSTORAGE
  guardarTarea(){

    //CONTROL DE ERRORES PARA EVITAR QUE EL TITULO VENGA VACIO
    if(this.Tarea.nombre === ''){
      alert('El nombre de la tarea no puede estar vacio');
      return;
    }

    //TENGO EN EL FORMULARIO EL NGSUBMIT, EN EL NGMODEL ASIGNO A LA PROPIEDAD DEL OBJETO TAREA
    this.listadoTareas.guardarTarea(this.Tarea);
    
    //CREO OTRA VEZ EL OBJETO PARA QUE SE RESERTEE EL UUID
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
