import { Component} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg, EventDragStopArg } from '@fullcalendar/interaction';
import { TareasCalendario } from '../../../../shared/interfaces/Tareas/tareas-calendario.interface.ts.js';
import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface.js';
import {v4 as uuid} from 'uuid';
import { TareasService } from '../../../../shared/services/tareas.service.js';




@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent {

  public events2: TareasCalendario [] = [];
  public date = new Date();

  constructor(private listadoTareas: TareasService) {

    //ME TRAIGO LAS TAREAS QUE ESTEN EN EL LOCAL Y LAS ASIGNO A EVENTS2
    this.events2 = this.listadoTareas.conseguirTareasCalendario();
    // Funcion para actualizar los eventos del calendario y asignarlo a el events del calendario
    this.actualizarEventos();
  }

  //CREO EL OBJETO CALENDARIO CON SUS OPCIONES
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events :  [],
    eventContent: (arg, createElement) => {
      const container = document.createElement('div');
      //slice para que solo muestre los primeros 8 caracteres
      container.innerHTML = arg.event.title.slice(0, 8);
      container.style.backgroundColor = 'lightblue';
      container.style.borderRadius = '2px';
      container.style.padding = '3px';
      return { domNodes: [container] };
    }
  };

  //FUNCION PARA ACTUALIZAR LOS EVENTOS DEL CALENDARIO
  actualizarEventos() {
    // Mapear los eventos2 en el formato esperado por FullCalendar y asignarlos a events
    //ESTO HA SIDO LO QUE YO NO HE SABIDO HACER
    this.calendarOptions.events = this.events2.map(evento => ({
      title: evento.title,
      start: evento.start,
    }));
  }


  //FUNCION PARA AÑADIR UNA TAREA AL CALENDARIO
  handleDateClick(arg:any) {
    let titulotareacalendario = prompt('Título de la tarea: ');
    //CONTROL DE ERRORES PARA QUE NO VENGA VACIO NI NULO
    if(titulotareacalendario === null || titulotareacalendario === ''){
      alert('El nombre de la tarea no puede estar vacio');
      return
    }

    //CREO UN OBJETO TAREAS DONDE ASIGNO LOS VALORES DE LA NUEVA TAREA ASIGNADA MEDIANTE EL CALENDARIO Y LO PUSEO EN EL LOCALSTORAGE
    let tarea: Tareas = {
      id: uuid(),
      nombre: titulotareacalendario,
      descripcion: '',
      estado: 0,
      fecha: arg.dateStr,
      favorita: 0,
      start: arg.dateStr,
      title: ''
    }

    //FUNCION PARA GUARDAR LA NUEVA TAREA EN EL LOCALSTORAGE
    this.listadoTareas.guardarTarea(tarea);
    //RECARCARGO LA PAGINA PARA QUE SE ACTUALICE EL CALENDARIO
    location.reload();
  }


}
