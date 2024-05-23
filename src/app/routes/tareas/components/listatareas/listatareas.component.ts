import { Component, Input, OnInit } from '@angular/core';
import { TareasService } from '../../../../shared/services/tareas.service';
import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { TareaMatDialogComponent } from '../../../../shared/components/task-mat-dialog/task-mat-dialog.component';
import { MatDialogBasicoComponent } from '../../../../shared/components/mat-dialog-basico/mat-dialog-basico.component';


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
    private dialog: MatDialog,
    private snackbarService: SnackbarService
  ) { }

  //PARA EL MATDIALOG
  openEditDialog(tarea: Tareas): void {
    const dialogRef = this.dialog.open(TareaMatDialogComponent, {
      width: '50%',
      data: {tarea , isEdit: true}
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result.nombre == ""){
        this.snackbarService.show('Los campos no pueden estar vacios', 1000, 'custom-snackbar-rojo');
        return;
      }
      if (!result) {
        this.snackbarService.show('La tarea no fue editada', 1000, 'custom-snackbar-rojo');
        setTimeout(() => {
          location.reload();
        }, 1000);
      } else {
        this.listadotareas.editarTarea(result, result.nombre, result.descripcion);
        this.snackbarService.show('Tarea editada', 1000, 'custom-snackbar-amarillo');
      }
    });
  }


  //OBTENGO DEL SERVICIO EL OBJETO TAREAS QUE TENGO CREADO
  get listadoTareas (): Tareas[]{
    return [...this.listadotareas.tareas]
  }


  //OBTENGO LA TAREA CUANDO HAGO CLICK EN EL BOTON DE COMPLETAR Y SE LA PASO A AL FUNCION TAREACOMPLETADA DEL SERVICIO QUE LA FILTRA POR EL ID
  tareaCompletada(value:Tareas):void{
    this.listadotareas.tareaCompletada(value);
    this.snackbarService.show('Tarea completada', 2000, 'custom-snackbar-verde');
  }

  borrarTarea(value:Tareas):void{
    const dialogRef = this.dialog.open(MatDialogBasicoComponent, {
      width: '50%',
      data: '¿Estas seguro que quiere borrar esta tarea?',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      } else {
        this.listadotareas.borrarTarea(value);
      }
    });
  }

  /*PROPIEDADES QUE USAMOS EN EL TEMPLATE PARA MOSTRAR LA FECHA
  Y PARA COMPROBAR EL ID Y AL PNERME ENCIMA DE UNA TAREA LO MUESTRE EN TODAS
  YA QUE CON EL BUCLE QUE HACEMOS PARA SACAR LAS TAREAS, SIN LA CONDICION DEL
  ID ME LO MOSTRARIA EN TODAS*/
  public fechaTemplate?: string = "";
  public idParaFecha?: string = "";

  //FUNCION PARA EL HOVER: TRAIGO LA ID DE LA TAREA Y LA PASO POR PARAMETRO, Y LLAMO A LA FUNCION DEL SERVICIO PARA MOSTRAR LA FECHA DE ESA TAREA EN CONCRETO
  mostrarfecha(value:string):void{
    this.fechaTemplate = this.listadotareas.mostrarFechadeTarea(value);
    this.idParaFecha = value;
  }

  //FUNCION PARA QUITAR LA FECHA CUANDO SALGO DEL HOVER
  quitarFecha():void{
    this.fechaTemplate = "";
    this.idParaFecha = "";
  }

  //FUNCION PARA AÑADIR LA TAREA A FAVORITOS, ME LLEVO LA TAREA COMO PARAMETRO Y SE LA PASO A LA FUNCION DEL SERVICIO QUE CAMBIA EL ESTADO DE LA PROPIEDAD "FAVORITA"
  anadiraFavorita(value: Tareas):void{
    this.listadotareas.tareasFavoritas(value);
    this.snackbarService.show('Tarea añadida a favorito', 2000, 'custom-snackbar-azul');
  }

}
