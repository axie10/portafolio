import { Component, } from '@angular/core';
import { TareasService } from '../../../../shared/services/tareas.service';
import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';


@Component({
  selector: 'app-tareasFavoritas',
  templateUrl: './tareasFavoritas.component.html',
  styleUrls: ['./tareasFavoritas.component.css']
})
export class TareasFavoritasComponent {

  constructor(private listadotareas: TareasService) { }

  // @Input()
  // public tareas: Tareas [] = [];

  get listadoTareas (){
    return [...this.listadotareas.tareas]
  }

  tareaCompletada(value:Tareas){
    this.listadotareas.tareaCompletada(value);
  }


  get listadotareas1 () {
    return [...this.listadotareas.tareas];
  }

  borrarTarea(value:Tareas){
    console.log(value)
    this.listadotareas.borrarTarea(value);
  }

  // editartarea(value?:Tareas){

  //   if(!value) return;
  //   let nuevoNombre = prompt("Nuevo titulo a tu tarea: ");
  //   if(!nuevoNombre) return;
  //   this.listadotareas.editarTarea(value, nuevoNombre);

  // }

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

  }

}
