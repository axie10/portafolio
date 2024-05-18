import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Paises } from '../../../../shared/interfaces/banderas/paises.interface';
import { Router } from '@angular/router';
import { FlagsService } from '../../../../shared/services/banderas.service';


@Component({
  selector: 'app-paginaprincipalbanderas',
  templateUrl: './paginaprincipalbanderas.component.html',
  styleUrls: ['./paginaprincipalbanderas.component.css']
})
export class PaginaprincipalbanderasComponent implements OnInit{

  public pais = new FormControl('');
  public result?: Paises;
  public result2?: Paises;
  public control : boolean = false;
  public historialpaises: string [] = [];
  public flags: Paises [] = [];

  @Output() 
  public paisTiempo = new EventEmitter<string>();

  constructor(
    private flagsService: FlagsService,
    private router: Router
  ) {
    //SACAMOS EL HISTORIAL DE PAISES DEL LOCALSTORAGE
    this.historialpaises = JSON.parse(sessionStorage.getItem('historialpaises') || '[]');
  }
  ngOnInit(): void {
    this.flagsService.getBanderasPaises().subscribe( data => {
      this.flags = data;
    })
  }

  // FUNCION QUE LLAMAMOS CUANDO SE EJECUTA EL INPUT
  buscarPais(){
    
    //SI EL INPUT ESTA VACIO NO HACE NADA
    if (this.pais.value === '' || this.pais.value === null) { 
      return; 
    }
    // BUSCAMOS EL PAIS EN EL ARRAY DE BANDERAS POR EL NOMBRE DEL PAIS Y LO GUARDAMOS EN UNA VARIABLE QUE ENVIAMOS AL HTML UNPAIS
    let encontrarPais = this.flags.find(flag => flag.name.common.toLowerCase() === this.pais.value?.toLowerCase());

    // SI SE ENCUENTRA EL PAIS, ASIGNAMOS EL RESULTADO
    if (encontrarPais) {
      this.result2 = encontrarPais;
      //MOSTRAMOS LA CARD DEL PAIS PONIENDO EL CONTROL A TRUE
      this.control = true;
      //GUARDAMOS EL PAIS EN EL HISTORIAL DE PAISES Y HACEMOS UNA COMPROBACION PARA QUE NO SE REPITA
      if (!this.historialpaises.includes(this.result2.name.common)) {
        this.historialpaises.push(this.result2.name.common);
      }
      //ACUTALIZAMOS EL LOCALSTORAGE CON EL NUEVO HISTORIAL DE PAISES SI NO SE REPITE
      sessionStorage.setItem('historialpaises', JSON.stringify(this.historialpaises));
      //VACIAMOS EL INPUT
      this.pais.reset();

    } else {
      // SI NO SE ENCUENTRA EL PAIS, MOSTRAMOS UNA ALERTA
      alert('No se ha encontrado el país');
    }

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


