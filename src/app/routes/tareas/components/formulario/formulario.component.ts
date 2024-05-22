import { Component, OnInit } from '@angular/core';

import {v4 as uuid} from 'uuid';
import { TareasService } from '../../../../shared/services/tareas.service';
import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBarConfig  } from '@angular/material/snack-bar';
import { SnackbarService } from '../../../../shared/services/snackbar.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //PROPIEDADES PARA EL SNACKBAR
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private listadoTareas: TareasService, 
    private snackbarService: SnackbarService
  ) { }

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
      this.snackbarService.show('La operación se completó con éxito', 2000, 'custom-snackbar-rojo');
      return;
    }

    //TENGO EN EL FORMULARIO EL NGSUBMIT, EN EL NGMODEL ASIGNO A LA PROPIEDAD DEL OBJETO TAREA
    this.listadoTareas.guardarTarea(this.Tarea);
    this.snackbarService.show('Tarea guardada', 2000, 'custom-snackbar-verde');
    
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
