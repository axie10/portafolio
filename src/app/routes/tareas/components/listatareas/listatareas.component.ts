import { Component, Input, OnInit } from '@angular/core';
import { TareasService } from '../../../../shared/services/tareas.service';
import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent {

  //PROPIEDADES PARA EL SNACKBAR
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private listadotareas: TareasService,
    private _snackBar: MatSnackBar,
  ) { }


  //OBTENGO DEL SERVICIO EL OBJETO TAREAS QUE TENGO CREADO
  get listadoTareas (){
    return [...this.listadotareas.tareas]
  }


  //OBTENGO LA TAREA CUANDO HAGO CLICK EN EL BOTON DE COMPLETAR Y SE LA PASO A AL FUNCION TAREACOMPLETADA DEL SERVICIO QUE LA FILTRA POR EL ID
  tareaCompletada(value:Tareas){
    this.listadotareas.tareaCompletada(value);
    this._snackBar.open("Tarea completada", 'Cerrar',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'custom-snackbar-verde',
      duration: 2000
    });
  }

  borrarTarea(value:Tareas){
    // console.log(value)
    this.listadotareas.borrarTarea(value);
    this._snackBar.open("Tarea borrada", 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'custom-snackbar-rojo',
      duration: 2000
    });
  }

  //FUNCION PARA EDITAR LA TAREA, SACA UN PROMPT PARA QUE EL USUARIO META EL NUEVO NOMBRE DE LA TAREA
  editartarea(value?:Tareas){
    //CONTROL DE ERRORES PARA QUE NO SEA UNDEFINED
    if(!value) return;
    let nuevoNombre = prompt("Nuevo titulo a tu tarea: ");
    if(!nuevoNombre) return;
    //LE PASO AL SERVICIO LA NUEVA TAREA CON EL NUEVO TITULO
    this.listadotareas.editarTarea(value, nuevoNombre);
    this._snackBar.open("Tarea editada", 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'custom-snackbar-amarillo',
      duration: 2000
    });

  }

  /*PROPIEDADES QUE USAMOS EN EL TEMPLATE PARA MOSTRAR LA FECHA
  Y PARA COMPROBAR EL ID Y AL PNERME ENCIMA DE UNA TAREA LO MUESTRE EN TODAS
  YA QUE CON EL BUCLE QUE HACEMOS PARA SACAR LAS TAREAS, SIN LA CONDICION DEL
  ID ME LO MOSTRARIA EN TODAS*/
  public fechaTemplate?: string = "";
  public idParaFecha?: string = "";

  //FUNCION PARA EL HOVER: TRAIGO LA ID DE LA TAREA Y LA PASO POR PARAMETRO, Y LLAMO A LA FUNCION DEL SERVICIO PARA MOSTRAR LA FECHA DE ESA TAREA EN CONCRETO
  mostrarfecha(value:string){
    this.fechaTemplate = this.listadotareas.mostrarFechadeTarea(value);
    this.idParaFecha = value;
  }

  //FUNCION PARA QUITAR LA FECHA CUANDO SALGO DEL HOVER
  quitarFecha(){
    this.fechaTemplate = "";
    this.idParaFecha = "";
  }

  //FUNCION PARA AÑADIR LA TAREA A FAVORITOS, ME LLEVO LA TAREA COMO PARAMETRO Y SE LA PASO A LA FUNCION DEL SERVICIO QUE CAMBIA EL ESTADO DE LA PROPIEDAD "FAVORITA"
  anadiraFavorita(value: Tareas){
    this.listadotareas.tareasFavoritas(value);
    this.listadotareas.tareasFavoritas(value);
    this._snackBar.open("Tarea añadida a favorito", 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'custom-snackbar-azul',
      duration: 2000
    });
  }

}
