import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Paises } from '../../interface/paises.interface';
import { FlagsService } from '../../../shared/services/banderas.service';

@Component({
  selector: 'app-cardpais',
  templateUrl: './cardpais.component.html',
  styleUrls: ['./cardpais.component.css']
})
export class CardpaisComponent implements OnInit {

  @Output()
  public paises2: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private servicioFlags: FlagsService
  ) { }

  ngOnInit() {
    //NOS SUBSCRIBIMOS A LA FUNCION DE SACAR TODAS LAS BANDERAS
    this.servicioFlags.nosSubcribimos();
  }

  // FUNCION PARA IMPRIMIR TODAS LAS BANDERAS
  get flags(): Paises []{
    return this.servicioFlags.sacarFlags
  }

  pasarpais(pais:string){
    this.paises2.emit(pais)
  }




}
