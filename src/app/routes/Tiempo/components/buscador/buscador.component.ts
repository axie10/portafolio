import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Tiempo } from '../../../../shared/interfaces/Tiempo/tiempo.interface';
import { List, Newtiempo } from '../../../../shared/interfaces/Tiempo/new-interface.interface';

import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { Autocompleted } from '../../../../shared/interfaces/Tiempo/autocompleted.interface';
import { forkJoin, switchMap, takeWhile, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TiempoService } from '../../../../shared/services/tiempo.service';
import { TiempoVariosDiasService } from '../../../../shared/services/tiempo_varios_dias.service';
import { GraficoService } from '../../../../shared/services/grafico.service';




@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  ngOnInit(): void {

     //BUSCAMOS LA CIUDAD POR DEFECTO, MADRID
     this.buscarPaisPorDefecto();
     
     //RUTA QUE USO TANTO PARA CUANDO VIENE DESDE LA VENTANA DE "BANDERA" COMO LA VENTANA DE "MAPAS"
     this.route.params
     .pipe(
       //HAGO UN CONTROL DE ERRORES PARA QUE NO PUEDA BUSCAR CON SIN PARAMETRO
       takeWhile(({ciudad})=> ciudad !== undefined),
       ).subscribe ( ({ciudad}) => {
       //LLAMO A LA FUNCION BUSCAR PAIS POR BANDERA QUE TAMBIEN LA USO PARA EL MAPA, ESTA FUNCION SE SUSCRIBE Y SACA TODOS LOS DATOS DE LA VISTA TIEMPO
       this.buscarTiempoPorPaisBanderaAndMapa(ciudad);
     }); 
    
  }

  constructor(
    private servicioTiempo: TiempoService,
    private servicioTiempoVarios: TiempoVariosDiasService,
    private servicioGrafica: GraficoService,
    private route: ActivatedRoute,
  ) { }


  @Output()
  //valor para enviar la lista de los proximos dias
  setsearch = new EventEmitter<List []>();

  @Output()
  //valor para enviar el nombre del pais y la ciudad
  nombre = new EventEmitter<string []>();

  //esta variable es para recoger el valor del input
  public buscadorPais = new FormControl('');
  
  // esta es para guaradar el valor recogido despues de subcribirnos
  public pais6?: Autocompleted [] = [];

  //PARA EL AUTOCOMPLETED
  buscarPais() {
    if(this.buscadorPais.value === null) {return}
    const value = this.buscadorPais.value;
      this.servicioTiempo.getautocompletar(value)
      .subscribe( pais => {
        this.pais6 = pais
      })
  }

  //ME SUSCRIBO A LA FUNCION DE AUTOCOMPLETAR
  opcionSeleccionada(event: MatAutocompleteActivatedEvent): void {

    //CONTROL DE ERRORES
    if(event.option?.value === undefined) {return}
    const nombrePais = event.option?.value.name;

    //me llevo el nombre del pais y el nombre de la ciudad para la barras de busqueda
    this.nombre.emit([nombrePais, event.option?.value.country]);

    forkJoin({
      pais3: this.servicioTiempo.getTiempo(nombrePais),
      pais4: this.servicioTiempoVarios.getTiempo(nombrePais),
      pais5: this.servicioGrafica.getTiempo(nombrePais)
    }).subscribe(({ pais3, pais4, pais5 }) => {

      this.servicioTiempo.guardarDatos(pais3);
      this.servicioTiempoVarios.guardarDatos(pais4);
      this.setsearch.emit(pais5.list);

    });
    //LIMPIO EL INPUT
    this.buscadorPais.setValue('');
  }

  //FUNCION POR DEFECTO
  buscarPaisPorDefecto() {
    const defaultCity: string = 'Madrid';

    forkJoin({
      pais3: this.servicioTiempo.getTiempo(defaultCity),
      pais4: this.servicioTiempoVarios.getTiempo(defaultCity),
      pais5: this.servicioGrafica.getTiempo(defaultCity)
    }).subscribe(({ pais3, pais4, pais5 }) => {

      this.servicioTiempo.guardarDatos(pais3);
      this.servicioTiempoVarios.guardarDatos(pais4);
      this.setsearch.emit(pais5.list);

    });
  }

  //FUNCION PARA EL PAIS DE LA BANDERA
  buscarTiempoPorPaisBanderaAndMapa(value:string) {

    if(value === undefined) {return}

    forkJoin({
      pais3: this.servicioTiempo.getTiempo(value),
      pais4: this.servicioTiempoVarios.getTiempo(value),
      pais5: this.servicioGrafica.getTiempo(value)
    }).subscribe(({ pais3, pais4, pais5 }) => {

      this.servicioTiempo.guardarDatos(pais3);
      //ME LLEVO EL NOMBRE DEL PAIS Y LA CIUDAD AL NAVBAR
      this.nombre.emit([pais3.name, pais3.sys.country]);
      this.servicioTiempoVarios.guardarDatos(pais4);
      this.setsearch.emit(pais5.list);
    });
  }

  
  
}
