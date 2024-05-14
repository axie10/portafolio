import { TareasCalendario } from './../interface/tareas-calendario.interface.ts';
import { Injectable } from '@angular/core';
import { Tareas } from '../interface/tarea.interface';

@Injectable({providedIn: 'root'})

export class TareasService {

    public tareas : Tareas [] = [];
    //variables para los alerts
    public tareaFavoritostareaAlert: string = "Tarea guardada en favorito";
    public tareaquirtadaFavoritostareaCompletadaAlert: string = "Tarea fuera de favoritos";
    public tareaCompletadaAlert: string = "Tarea completada";
    public tareaEliminadatareaCompletadaAlert: string = "Tarea eliminada";  
    public tareaGuardadaAlert: string = "Tarea guardada";
    public tareaEditada: string = "Tarea editada";



    constructor() {
        this.tareas = JSON.parse(localStorage.getItem('history')!) || [];
    }

    guardarEnLocalStorage(value: Tareas []){
        localStorage.setItem('history', JSON.stringify(value));
    }

    guardarTarea(value:Tareas){
        this.tareas.push(value);
        this.guardarEnLocalStorage(this.tareas);
        alert(this.tareaGuardadaAlert);
    }

    tareaCompletada(value:Tareas){

        for(let i = 0; i < this.tareas.length; i++){
            if(this.tareas[i].id === value.id){
                value.estado = 1;
            }
        }
        
        this.guardarEnLocalStorage(this.tareas);
        alert(this.tareaCompletadaAlert);
    }

    borrarTarea(value:Tareas){

        // console.log(value)

        for(let i = 0; i < this.tareas.length; i++){

            if(this.tareas[i].id === value.id){

                this.tareas.splice(i,1)
            }
        }
        this.guardarEnLocalStorage(this.tareas);
        alert(this.tareaEliminadatareaCompletadaAlert);
    }

    editarTarea(value:Tareas, nuevonombre:string){

        for(let i = 0; i < this.tareas.length; i++){
            if(this.tareas[i].id === value.id){
                this.tareas[i].nombre = nuevonombre;
            }
        }
        
        this.guardarEnLocalStorage(this.tareas);
        alert(this.tareaEditada)
    }

    mostrarFechadeTarea(value:string):string | undefined{

        let fecha: string | undefined = "";

        for(let i = 0; i < this.tareas.length; i++){
            if(this.tareas[i].id === value){

                fecha = this.tareas[i].fecha;

            }
        }
        return fecha;
    }

    borrarLocalstorage(){

        let borra = confirm("¿Desea eliminar el historial de tareas?");
        if(!borra) return;
        localStorage.clear();
        location.reload();
    }


    tareasFavoritas(value:Tareas){

        for(let i = 0; i < this.tareas.length; i++){

            if(this.tareas[i].id === value.id){
                this.tareas[i].favorita = 1;
            }
        }

        this.guardarEnLocalStorage(this.tareas);
        // alert(this.tareaFavoritostareaAlert)
    }

    quitardeFavorito(value:Tareas){
        
        for(let i = 0; i < this.tareas.length; i++){
            
            if(this.tareas[i].id === value.id){
                this.tareas[i].favorita = 0;
            }
        }
        this.guardarEnLocalStorage(this.tareas);
        // alert(this.tareaquirtadaFavoritostareaCompletadaAlert)

    }

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