import { Injectable } from '@angular/core';
import { Tareas } from '../interfaces/Tareas/tarea.interface.js';
import { TareasCalendario } from '../interfaces/Tareas/tareas-calendario.interface.ts.js';

@Injectable({providedIn: 'root'})

export class TareasService {

    public tareas : Tareas [] = [];

    constructor() {
        this.tareas = JSON.parse(localStorage.getItem('history')!) || [];
    }

    //GUARDAR LA TAREAS EN EL LOCALSTORAGE
    guardarEnLocalStorage(value: Tareas []){
        localStorage.setItem('history', JSON.stringify(value));
    }

    //OBTENER LAS TAREAS
    guardarTarea(value:Tareas){
        this.tareas.push(value);
        this.guardarEnLocalStorage(this.tareas);

    }

    //LO USO PARA CAMBIAR EL ESTADO DE UNA TAREA Y PASARLA A COMPLETADA
    tareaCompletada(value:Tareas){
        for(let i = 0; i < this.tareas.length; i++){
            if(this.tareas[i].id === value.id){
                value.estado = 1;
            }
        }
        
        this.guardarEnLocalStorage(this.tareas);
    }

    //LO USO PARA BORRAR UNA TAREA, LA BUSCO POR EL ID Y CUANDO COINCIDE LA ELIMINO
    borrarTarea(value:Tareas){

        for(let i = 0; i < this.tareas.length; i++){
            if(this.tareas[i].id === value.id){
                //USO SPLICE PARA ELIMINAR LA TAREA QUE COINCIDE CON EL ID Y CON EL SPLICE SELECCIONO EL NUMERO DE ELEMENTOS QUE QUIERO ELIMINAR
                this.tareas.splice(i,1)
            }
        }
        //UUNA VEZ QUE ESTA ELIMINADA LA VUELVO A GUARDAR EN EL LOCALSTORAGE PARA ACTUALIZAR
        this.guardarEnLocalStorage(this.tareas);
    }

    //LO USO PARA EDITAR LAS TAREAS LA BUSCO POR EL ID Y CUANDO COINCIDE CAMBIO EL NOMBRE
    editarTarea(value:Tareas, nuevonombre:string, nuevadescripcion:string){

        for(let i = 0; i < this.tareas.length; i++){
            if(this.tareas[i].id === value.id){
                this.tareas[i].nombre = nuevonombre;
                this.tareas[i].descripcion = nuevadescripcion;
            }
        }
        //GUARDO EN EL LOCALSTORAGE PARA ACTUALIZAR
        this.guardarEnLocalStorage(this.tareas);
    }

    //LO USO PARA SACAR EN LA ETIQUETA DE LA TAREA CUANDO HAGO EL HOVER LA FECHA DE LA TAREA
    mostrarFechadeTarea(value:string):string | undefined{
        let fecha: string | undefined = "";
        for(let i = 0; i < this.tareas.length; i++){
            if(this.tareas[i].id === value){
                fecha = this.tareas[i].fecha;
            }
        }
        return fecha;
    }

    //LO USO PARA LIMPIAR EL HISTORIAL DE TAREAS
    borrarLocalstorage(){

        let borra = confirm("¿Desea eliminar el historial de tareas?");
        if(!borra) return;
        localStorage.removeItem('history');
        location.reload();
    }

    //PARA AÑADIR LAS TAREAS A FAVORITAS, LAS BUSCO POR EL ID Y CUANDO COINCIDE LE CAMBIO EL ESTADO DE LA PROPIEDAD "FAVORITA" A 0
    tareasFavoritas(value:Tareas){

        for(let i = 0; i < this.tareas.length; i++){

            if(this.tareas[i].id === value.id){
                this.tareas[i].favorita = 1;
            }
        }

        this.guardarEnLocalStorage(this.tareas);
    }

    //LO USO PARA QUITAR LAS TAREAS DE FAVORITO COMBIANDOLE EL ESTADOD DE LA PROPIEDAD "FAVORITA" A 1
    quitardeFavorito(value:Tareas){
        
        for(let i = 0; i < this.tareas.length; i++){
            
            if(this.tareas[i].id === value.id){
                this.tareas[i].favorita = 0;
            }
        }
        this.guardarEnLocalStorage(this.tareas);
    }


    //LO UTILIZO PARA OBTENER EL LISTADO DE TAREAS QUE EXISTAN EN MI LOCALSTORAGE, LAS GUARDO EN UN ARRAY DE TIPO TAREASCALNDARIO Y SACO ESE ARRAY DE OBJETOS
    conseguirTareasCalendario(): TareasCalendario[] {

        const tareasCalendario: TareasCalendario [] = [];

        for(let i = 0; i < this.tareas.length; i++){
            let tareas2: TareasCalendario = {
                title: this.tareas[i].nombre,
                start: this.tareas[i].start
            };
            tareasCalendario.push(tareas2);  
        }

        return tareasCalendario;
    }

}