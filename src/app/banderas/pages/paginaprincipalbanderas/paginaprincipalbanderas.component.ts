import { Component, DoCheck, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Paises } from '../../interface/paises.interface';
import { Router } from '@angular/router';
import { FlagsService } from '../../../shared/services/banderas.service';


@Component({
  selector: 'app-paginaprincipalbanderas',
  templateUrl: './paginaprincipalbanderas.component.html',
  styleUrls: ['./paginaprincipalbanderas.component.css']
})
export class PaginaprincipalbanderasComponent{

  public pais = new FormControl('');
  public result?: Paises;
  public result2?: Paises;
  public control : boolean = false;
  public historialpaises: string [] = [];

  @Output() 
  public paisTiempo = new EventEmitter<string>();

  constructor(
    private flagsService: FlagsService,
    private router: Router
  ) {
    //SACAMOS EL HISTORIAL DE PAISES DEL LOCALSTORAGE
    this.historialpaises = JSON.parse(localStorage.getItem('historialpaises') || '{}');
  }

  // FUNCION QUE LLAMAMOS CUANDO SE EJECUTA EL INPUT
  buscarPais(){
    //SI EL INPUT ESTA VACIO NO HACE NADA
    if(this.pais.value === null || this.pais.value === ''){
      return
    }
    //SI NO ESTA VACIO HACE LA PETICION A LA API
    this.flagsService.getBanderasPaisesPorPais(this.pais.value).subscribe( data => {
      this.result2 = data;
      //GUARDAMOS EL PAIS EN EL HISTORIAL DE PAISES Y LO GUARDAMOS EN EL LOCALSTORAGE
      this.historialpaises.push(this.result2.name.common);
      localStorage.setItem('historialpaises', JSON.stringify(this.historialpaises));
    })
    this.control = true;
  }

  // FUNCION QUE LLAMAMOS CUANDO SE EJECUTA EL EVENTEMMITER
  cogerpais(value: string){
      //NOS TRAE EL CODIGO DEL PAIS POR UN POUTPUT DE LA CARD Y NOS SUSBRINBIMOS CUANDO SE PDORUCE EL EVENTEMMITER 
      this.flagsService.getBanderasPaisesPorPais(value).subscribe( data => {
        this.result2 = data;
      })
  }

  //FUNCION QUE NOS LLEVA A LA PAGINA DEL TIEMPO Y NOS MUESTRA EL TIEMPO DE LA CIUDAD
  llevarTiempo(value:string [] | undefined){
    if(value === undefined){return};
  }

  //FUNCION QUE NOS LLEVA A LA PAGINA DE BANDERAS
  atras(){
    this.control = false;
    this.pais.reset();
  }



}


