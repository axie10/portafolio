import { Result } from './../../interfaces/provincia.interface';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comunidadesautonomas } from '../../interfaces/cccaa.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Provincia } from '../../interfaces/provincia.interface';
import { switchMap, tap } from 'rxjs';
import { Municipio } from '../../interfaces/municipio.interface';
import { LngLat, Map, Marker } from 'mapbox-gl';
import { ComunidadesAutonomasService } from '../../../../shared/services/servicio-selectores-ccaa.service';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarkers {
  color: string;
  lngLat: number[];
}

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit ,AfterViewInit {

  //PARA COORDENADAS
  public ciudadmarcador: string = '';


  //PARA EL MARCADOR
  public markersPublic : MarkerAndColor[] = [];
  public map?: Map;

  //PARA EL MAPA
  public CCAA1: Comunidadesautonomas = { results: [] };
  public provincia: Provincia = { results: [] };
  public municipio: Municipio = { total_count: 0, results: [] };
  public municipioparatiempo: string = '';
  public coordenadas: [number, number]= [-3.70256,40.4165];
  public infoMunicipio: Municipio = { total_count: 0, results: [] };

  //PARA EL MAPA/////////////
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {

    if(!this.divMap) return console.error('No se pudo cargar el mapa');
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.coordenadas, // starting position [lng, lat]
      zoom: 2, // starting zoom
    });
  }
  //////////////////

  //PARA EL FORMULARIO
  public myForm: FormGroup = this.fb.group({
    ccaa: ['', Validators.required],
    provincia: ['', Validators.required],
    municipio: ['', Validators.required],
  });

  constructor(
    private service: ComunidadesAutonomasService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.onCCAAChanged();
    this.onprovincia();
    this.onMunicipio();
    this.tiempoparamunicipio();
  }

  //FUNCION PARA IMPRIMIR TODOS LOS PAISES
  onCCAAChanged(): void {
    this.service.getCCAA()
      .subscribe(results => {
        this.CCAA1 = results;
      });
  }

  //FUNCION PARA SACAR LA PROVINCIA
  onprovincia(): void {
    this.myForm.get('ccaa')?.valueChanges
      .pipe(
        switchMap((code) => this.service.getprovincia(code))
      ).subscribe(results => {
        this.provincia = results;
      });
  }

  //FUNCION PARA SACAR EL MUNICIPIO
  onMunicipio(): void {
    this.myForm.get('provincia')?.valueChanges
      .pipe(
        switchMap((provincia) => this.service.getMunicipiosByProvincia(provincia))
      ).subscribe(results => {
        this.municipio = results;
      });
    this.myForm.get('municipio')!.valueChanges.pipe(
      switchMap((provincia) => this.service.getMunicipios(provincia))
    ).subscribe(results => {
        let lat = results.results[0].geo_point_2d.lat;
        let lon = results.results[0].geo_point_2d.lon;
        this.coordenadas = [lon, lat];
        this.map?.flyTo({ center: this.coordenadas, zoom: 10});
        this.infoMunicipio = results;
      });
  }

  //FUNCION PARA SACAR EL MUNICIPIO PARA EL TIEMPO
  tiempoparamunicipio() {
    this.myForm.get('municipio')?.valueChanges
      .subscribe( () => {
        this.municipioparatiempo = this.myForm.get('municipio')?.value;
        // this.cambiardatosdelmapa(this.municipioparatiempo);
      });
  }

  //FUNCION PARA REFRESCAR EL MAPA
  refreshMap(): void {
    if (!this.divMap) return console.error('No se pudo cargar el mapa');
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.coordenadas, // starting position [lng, lat]
      zoom: 10, // starting zoom
    });
  }

  ///PARA EL MARCADOR//////////////////
  createMarker(){
    if(!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.añadirMarcador(lngLat, color);
    //NOS SUSCRIBIMOS A LA FUNCION PARA SACAR LA CIUDAD
    this.service.getTiempopormarcador(lngLat.lat, lngLat.lng)
      .subscribe(({ name }) => {
      this.ciudadmarcador = name;
      // Subscribe to another service using the name
      this.service.getTodoslosDatosdelSelector(name)
        .subscribe(data => {
          // console.log(data);
          if(data.results[0]){
            this.myForm.get('ccaa')?.setValue(data.results[0].acom_name);
            this.myForm.get('provincia')?.setValue(data.results[0].prov_name);
            this.myForm.get('municipio')?.setValue(data.results[0].mun_name);
          } else {
            return alert('No se ha encontrado el municipio');
          }
        });
      });

  }

  añadirMarcador(lngLat: LngLat, color:string){
    if( !this.map ) return;

    const marker = new Marker({
      color: color,
      draggable: true
    })
    .setLngLat(lngLat)
    .addTo(this.map);
  }

}