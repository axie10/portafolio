import { NgModule } from '@angular/core';
import { TiempoRoutingModule } from './tiempo-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardCiudadComponent } from './components/card-ciudad/card-ciudad.component';
import { CardGrandeCiudadComponent } from './components/card-grande-ciudad/card-grande-ciudad.component';
import { BuscadorComponen } from './components/buscador/buscador.component';
import { VariastemperaturasComponent } from './components/variastemperaturas/variastemperaturas.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { MaterialModule } from '../material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
    imports: [
        TiempoRoutingModule,
        MaterialModule,
        NgxChartsModule
    ],
    exports: [
        MainPageComponent,
    ],
    declarations: [
        MainPageComponent,
        NavbarComponent,
        CardCiudadComponent,
        CardGrandeCiudadComponent,
        BuscadorComponen,
        VariastemperaturasComponent,
        GraficoComponent
    ],
    providers: [],
})
export class TiempoModule { }