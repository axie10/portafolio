import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historialdepaises',
  templateUrl: './historialdepaises.component.html',
  styleUrls: ['./historialdepaises.component.css']
})
export class HistorialdepaisesComponent {

  public historialpaises: string[] = [];

  constructor() {
    this.historialpaises = JSON.parse(localStorage.getItem('historialpaises') || '[]');
  }

}
