import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, DoCheck } from '@angular/core';
import { TiempoService } from '../../service/tiempo.service';
import { FormControl } from '@angular/forms';
import { Tiempo } from '../../interface/tiempo.interface';
import { TiempoVariosDiasService } from '../../service/tiempo_varios_dias.service';
import { List, Newtiempo } from '../../interface/new-interface.interface';
import { GraficoService } from '../../service/grafico.service';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { Autocompleted } from '../../interface/autocompleted.interface';
import { forkJoin, switchMap, takeWhile, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponen implements OnInit {


  public ciudadBandera?: string;

  ngOnInit(): void {

    this.buscarPaisPorDefecto();
     
    //SACAMOS DE LA URL LA CIUDAD PARA PODER UTILIZARLA Y BUSCAR EL PAIS
    this.route.params
    .pipe(
      takeWhile(({ciudad})=> ciudad !== undefined),
      switchMap( ({ciudad}) => this.servicioTiempo.getTiempo(ciudad)),
      )
      .subscribe ( (data: Tiempo) => {
      this.ciudadBandera = data.name;
      this.buscarPaisBandera();
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
      this.setsearch.emit(this.pais5.list);

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
    this.setsearch.emit(this.pais5.list);
  });
  }

  //FUNCION PARA EL PAIS DE LA BANDERA
  buscarPaisBandera() {

    if(this.ciudadBandera === undefined) {return}

    const paisBandera: string = this.ciudadBandera;

    forkJoin({
      pais3: this.servicioTiempo.getTiempo(paisBandera),
      pais4: this.servicioTiempoVarios.getTiempo(paisBandera),
      pais5: this.servicioGrafica.getTiempo(paisBandera)
    }).subscribe(({ pais3, pais4, pais5 }) => {
      this.pais3 = pais3;
      this.servicioTiempo.guardarDatos(this.pais3);

      this.pais4 = pais4;
      this.servicioTiempoVarios.guardarDatos(this.pais4);

      this.pais5 = pais5;
      this.setsearch.emit(this.pais5.list);
    });
  }

  
  
}
