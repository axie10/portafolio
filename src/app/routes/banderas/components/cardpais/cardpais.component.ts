import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Paises } from '../../../../shared/interfaces/banderas/paises.interface';
import { FlagsService } from '../../../../shared/services/banderas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardpais',
  templateUrl: './cardpais.component.html',
  styleUrls: ['./cardpais.component.css']
})
export class CardpaisComponent implements OnInit {

  //VARIABLE PARA CARGAR TODAS LAS BANDERAS
  public flags: Paises [] = [];

  //SE EMITE EL PAIS SELECCIONADO
  @Output()
  public paises2: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private servicioFlags: FlagsService,
  ) { }

  ngOnInit() {
    //NOS SUBSCRIBIMOS A LA FUNCION DE SACAR TODAS LAS BANDERAS
    this.servicioFlags.getBanderasPaises().subscribe({
      next: (data: Paises[]) => {
        this.flags = data;
      },
      error: (error: any) => {
        alert('Error al cargar las banderas');
      }
    });
  }

  //FUNCION QUE EMITE EL PAIS SELECCIONADO 
  pasarpais(pais:string){
    this.paises2.emit(pais)
  }

}
