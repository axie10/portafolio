import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/home/homepage/home-page.component';
import { BarraBusquedaComponent } from './components/barra-busqueda/barra-busqueda.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';
import { PaginaprincipalgifsComponent } from './pages/paginaprincipalgifs/paginaprincipalgifs.component';




@NgModule({
  declarations: [
    CardListComponent,
    BarraBusquedaComponent,
    GifsCardComponent,
    HomepageComponent,
    PaginaprincipalgifsComponent
    
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports:[
    PaginaprincipalgifsComponent
  ]
 
})
export class GifsModule { }
