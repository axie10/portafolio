import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Tiempo } from '../../interface/tiempo.interface';
import { List, Newtiempo } from '../../interface/new-interface.interface';

import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { Autocompleted } from '../../interface/autocompleted.interface';
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
export class BuscadorComponen implements OnInit {

  ngOnInit(): void {

    this.buscarPaisPorDefecto();
     
    //SACAMOS DE LA URL LA CIUDAD PARA PODER UTILIZARLA Y BUSCAR EL PAIS
    this.route.params
    .pipe(
      takeWhile(({ciudad})=> ciudad !== undefined),
      switchMap( ({ciudad}) => this.servicioTiempo.getTiempo(ciudad)),
      )
      .subscribe ( (data: Tiempo) => {
      this.buscarPaisBandera(data.name);
      this.nombre.emit([data.name, data.sys.country]);
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
  public pais3?: Tiempo;
  public pais4?: Newtiempo;
  public pais5?: Newtiempo;
  public pais6?: Autocompleted [] = [];

  //PARA EL AUTOCOMPLETED
  buscarPais() {
    const value: string = this.buscadorPais.value ?? '';

    if (value !== '') {
      this.servicioTiempo.getautocompletar(value)
      .subscribe( 
        pais => {
          this.pais6 = pais;
        },
      )}
  }

  //ME SUSCRIBO A LA FUNCION DE AUTOCOMPLETAR
  opcionSeleccionada(event: MatAutocompleteActivatedEvent): void {

    const nombrePais = event.option?.value.name;

    //me llevo el nombre del pais y el nombre de la ciudad para la barras de busqueda
    this.nombre.emit([nombrePais, event.option?.value.country]);

    forkJoin({
      pais3: this.servicioTiempo.getTiempo(nombrePais),
      pais4: this.servicioTiempoVarios.getTiempo(nombrePais),
      pais5: this.servicioGrafica.getTiempo(nombrePais)
    }).subscribe(({ pais3, pais4, pais5 }) => {

      this.pais3 = pais3;
      this.servicioTiempo.guardarDatos(this.pais3);
      
      this.pais4 = pais4;
      this.servicioTiempoVarios.guardarDatos(this.pais4);

      this.pais5 = pais5;
      this.setsearch.emit(this.pais5?.list);

      // Clear the input value
      this.buscadorPais.setValue('');
    });
  }

  //FUNCION POR DEFECTO
  buscarPaisPorDefecto() {
  const defaultCity: string = 'Madrid';

  forkJoin({
    pais3: this.servicioTiempo.getTiempo(defaultCity),
    pais4: this.servicioTiempoVarios.getTiempo(defaultCity),
    pais5: this.servicioGrafica.getTiempo(defaultCity)
  }).subscribe(({ pais3, pais4, pais5 }) => {
    this.pais3 = pais3;
    this.servicioTiempo.guardarDatos(this.pais3);

    this.pais4 = pais4;
    this.servicioTiempoVarios.guardarDatos(this.pais4);

    this.pais5 = pais5;
    this.setsearch.emit(this.pais5?.list);
  });
  }

  //FUNCION PARA EL PAIS DE LA BANDERA
  buscarPaisBandera(value:string) {

    if(value === undefined) {return}

    forkJoin({
      pais3: this.servicioTiempo.getTiempo(value),
      pais4: this.servicioTiempoVarios.getTiempo(value),
      pais5: this.servicioGrafica.getTiempo(value)
    }).subscribe(({ pais3, pais4, pais5 }) => {
      this.pais3 = pais3;
      this.servicioTiempo.guardarDatos(this.pais3);

      this.pais4 = pais4;
      this.servicioTiempoVarios.guardarDatos(this.pais4);

      this.pais5 = pais5;
      this.setsearch.emit(this.pais5?.list);
    });
  }

  
  
}
