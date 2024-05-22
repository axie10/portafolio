import { Component, } from '@angular/core';
import { TareasService } from '../../../../shared/services/tareas.service';
import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarService } from '../../../../shared/services/snackbar.service';


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
    private snackbarService: SnackbarService
  ) { }

  get listadoTareas (): Tareas[]{
    return [...this.listadotareas.tareas]
  }

  tareaCompletada(value:Tareas):void{
    this.listadotareas.tareaCompletada(value);
  }

  borrarTarea(value:Tareas):void{
    this.listadotareas.borrarTarea(value);
  }

  /*PROPIEDADES QUE USAMOS EN EL TEMPLATE PARA MOSTRAR LA FECHA
  Y PARA COMPROBAR EL ID Y AL PNERME ENCIMA DE UNA TAREA LO MUESTRE EN TODAS
  YA QUE CON EL BUCLE QUE HACEMOS PARA SACAR LAS TAREAS, SIN LA CONDICION DEL
  ID ME LO MOSTRARIA EN TODAS*/
  public fechaTemplate?: string = "";
  public idParaFecha?: string = "";

  mostrarfecha(value:string):void{
    this.fechaTemplate = this.listadotareas.mostrarFechadeTarea(value);
    this.idParaFecha = value;
  }

  quitarFecha():void{
    this.fechaTemplate = "";
    this.idParaFecha = "";
  }

  quitardeFavorito(value:Tareas):void{
    this.listadotareas.quitardeFavorito(value);
    this.snackbarService.show('Tarea quitada de favoritos', 2000, 'custom-snackbar-azul');
  }

}
