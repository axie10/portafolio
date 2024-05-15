import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historialdepaises',
  templateUrl: './historialdepaises.component.html',
  styleUrls: ['./historialdepaises.component.css']
})
export class HistorialdepaisesComponent {

  public historialpaises: string[] = [];

  constructor() {
    //SACAMOS EL HISTORIAL DE PAISES DEL LOCALSTORAGE
    this.historialpaises = JSON.parse(sessionStorage.getItem('historialpaises') || '[]');
  }

}
