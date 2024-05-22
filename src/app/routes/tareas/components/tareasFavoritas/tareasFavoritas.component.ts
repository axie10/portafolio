import { Component, } from '@angular/core';
import { TareasService } from '../../../../shared/services/tareas.service';
import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-tareasFavoritas',
  templateUrl: './tareasFavoritas.component.html',
  styleUrls: ['./tareasFavoritas.component.css']
})
export class TareasFavoritasComponent {

  //PROPIEDADES PARA EL SNACKBAR
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private listadotareas: TareasService,
    private _snackBar: MatSnackBar
  ) { }

  get listadoTareas (){
    return [...this.listadotareas.tareas]
  }

  tareaCompletada(value:Tareas){
    this.listadotareas.tareaCompletada(value);
  }

  borrarTarea(value:Tareas){
    this.listadotareas.borrarTarea(value);
  }

  /*PROPIEDADES QUE USAMOS EN EL TEMPLATE PARA MOSTRAR LA FECHA
  Y PARA COMPROBAR EL ID Y AL PNERME ENCIMA DE UNA TAREA LO MUESTRE EN TODAS
  YA QUE CON EL BUCLE QUE HACEMOS PARA SACAR LAS TAREAS, SIN LA CONDICION DEL
  ID ME LO MOSTRARIA EN TODAS*/
  public fechaTemplate?: string = "";
  public idParaFecha?: string = "";

  mostrarfecha(value:string){
    this.fechaTemplate = this.listadotareas.mostrarFechadeTarea(value);
    this.idParaFecha = value;
  }

  quitarFecha(){
    this.fechaTemplate = "";
    this.idParaFecha = "";
  }

  quitardeFavorito(value:Tareas){
    this.listadotareas.quitardeFavorito(value);
    this._snackBar.open("Tarea quitada de favoritos", 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'custom-snackbar-azul',
      duration: 2000
    });
  }

}
