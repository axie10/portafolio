import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../../shared/services/tareas.service';

@Component({
  selector: 'app-paginaprincipaltareas',
  templateUrl: './paginaprincipaltareas.component.html',
  styleUrls: ['./paginaprincipaltareas.component.css']
})
export class PaginaprincipaltareasComponent implements OnInit {

  constructor(private listadoTareas: TareasService) { }

  ngOnInit() {
  }

  borraLocalStorage(){

    this.listadoTareas.borrarLocalstorage();

  }

}
