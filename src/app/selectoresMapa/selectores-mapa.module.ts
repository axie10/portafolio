import { NgModule } from '@angular/core';
import { PaginaPrincipalComponent } from './page/pagina-principal/pagina-principal.component';
import { PaginaPrincipalRoutingModule } from './selectores-mapa.routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import mapboxgl from 'mapbox-gl';
(mapboxgl).accessToken = 'pk.eyJ1IjoiYXhpZTEwIiwiYSI6ImNsdnJ2MHo5aDBvcDIyaW52ajduZTg3N2kifQ.01wd9ljPYcqSeU9Hckne2A';



@NgModule({
  declarations: [
    PaginaPrincipalComponent
  ],
  imports: [
    PaginaPrincipalRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginaPrincipalComponent
  ],
 
})
export class SelectoresMapaModule { }
