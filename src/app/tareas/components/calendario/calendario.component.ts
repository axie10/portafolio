import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { CalendarOptions, Calendar, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg, EventDragStopArg } from '@fullcalendar/interaction';
import { TareasCalendario } from '../../interface/tareas-calendario.interface.ts';
import { TareasService } from '../../service/tareas.service.js';
import { Tareas } from '../../interface/tarea.interface.js';
import {v4 as uuid} from 'uuid';




@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent {

  public events2: TareasCalendario [] = [];
  public date = new Date();

  constructor( private listadoTareas: TareasService) {

    this.events2 = this.listadoTareas.conseguirTareasCalendario();
    // console.log(this.events2);
    // Funcion para actualizar los eventos del calendario y asignarlo a el events del calendario
    this.actualizarEventos();

  }
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events :  [],
    eventContent: (arg, createElement) => {
      const container = document.createElement('div');
      container.innerHTML = arg.event.title;
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
    if(titulotareacalendario === null){return}

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

    console.log(arg.dateStr);

    this.listadoTareas.guardarTarea(tarea);
    location.reload();
  }


}
