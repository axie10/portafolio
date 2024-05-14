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
export class PaginaprincipalbanderasComponent implements DoCheck{

  public pais = new FormControl('');
  public result?: Paises;
  public control : boolean = false;

  @Output() 
  public paisTiempo = new EventEmitter<string>();

  constructor(
    private flagsService: FlagsService,
    private router: Router
  ) {
  }

  //UTILIZAMOS NGDOCHECK PARA QUE REVISE LA PRIPIEDAD ANTES DE CARGAR Y NO CARGUE EL UNDEFINED
  ngDoCheck(): void {
    this.result = this.flagsService.sacarPais;
  }

  // FUNCION QUE LLAMAMOS CUANDO SE EJECUTA EL INPUT
  buscarPais(){
    if(this.pais.value === null){
      return
    }
    this.flagsService.nosSubcribimos2(this.pais.value)
    this.control = true;
  }

  // FUNCION QUE LLAMAMOS CUANDO SE EJECUTA EL EVENTEMMITER
  cogerpais(value: string){
      this.flagsService.nosSubcribimos2(value)
  }

  //FUNCION QUE NOS LLEVA A LA PAGINA DEL TIEMPO Y NOS MUESTRA EL TIEMPO DE LA CIUDAD
  llevarTiempo(value:string [] | undefined){
    if(value === undefined){return};
    // this.router.navigate(['/tiempo']);
  }




}


