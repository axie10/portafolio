import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Paises } from '../../../../shared/interfaces/banderas/paises.interface';
import { FlagsService } from '../../../../shared/services/banderas.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../../shared/services/snackbar.service';

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
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    //NOS SUBSCRIBIMOS A LA FUNCION DE SACAR TODAS LAS BANDERAS
    this.servicioFlags.getBanderasPaises().subscribe({
      next: (data: Paises[]) => {
        this.flags = data;
      },
      error: (error: any) => {
        this.snackbarService.show('Error al cargar las banderas', 2000, 'custom-snackbar-rojo');
      }
    });
  }

  //FUNCION QUE EMITE EL PAIS SELECCIONADO 
  pasarpais(pais:string){
    this.paises2.emit(pais)
  }

}
