import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { List, Newtiempo } from '../../../../shared/interfaces/Tiempo/new-interface.interface';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { Autocompleted } from '../../../../shared/interfaces/Tiempo/autocompleted.interface';
import { forkJoin, switchMap, takeWhile, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TiempoService } from '../../../../shared/services/tiempo.service';
import { TiempoVariosDiasService } from '../../../../shared/services/tiempo_varios_dias.service';
import { GraficoService } from '../../../../shared/services/grafico.service';
import { SnackbarService } from '../../../../shared/services/snackbar.service';




@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  ngOnInit(): void {

    //PARA PODER BUSCAR EL PAIS CUANDO ESTA EN LA PESTAÑA QUE VIENE DEL MAPA O DE LA BANDERA
    this.buscarPais();

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
    private snackbarService: SnackbarService
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
    if(this.buscadorPais.value === null || this.buscadorPais.value === '') {return}
    const value = this.buscadorPais.value;
      this.servicioTiempo.getautocompletar(value)
      .subscribe( pais => {
        this.pais6 = pais
      })
  }

  //ME SUSCRIBO A LA FUNCION DE AUTOCOMPLETAR
  opcionSeleccionada(event: MatAutocompleteActivatedEvent): void {

    //CONTROL DE ERRORES
    if(event.option?.value === undefined) {
      this.snackbarService.show('No se ha encontrado la ciudad', 2000, 'custom-snackbar-rojo');
      return
    }
    const nombrePais = event.option?.value.name;
    const acronimopais = event.option?.value.country;

    //me llevo el nombre del pais y el nombre de la ciudad para la barras de busqueda
    this.nombre.emit([nombrePais, event.option?.value.country]);

    forkJoin({
      pais3: this.servicioTiempo.getTiempoBuscador(nombrePais, acronimopais),
      pais4: this.servicioTiempoVarios.getTiempoBuscador(nombrePais, acronimopais),
      pais5: this.servicioGrafica.getTiempoBuscador(nombrePais, acronimopais)
    }).subscribe(({ pais3, pais4, pais5 }) => {

      this.servicioTiempo.guardarDatos(pais3);
      //BORRO EL PRIMER OBJETO DEL ARRAY PARA QUE NO ME SAQUE EL DIA DE HOY
      pais4.list.shift();
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
      //BORRO EL PRIMER OBJETO DEL ARRAY PARA QUE NO ME SAQUE EL DIA DE HOY
      pais4.list.shift();
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
      //BORRO EL PRIMER OBJETO DEL ARRAY PARA QUE NO ME SAQUE EL DIA DE HOY
      pais4.list.shift();
      this.servicioTiempoVarios.guardarDatos(pais4);
      this.setsearch.emit(pais5.list);
    });
  }

  
  
}
