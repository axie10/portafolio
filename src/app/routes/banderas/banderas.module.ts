import { NgModule } from '@angular/core';
import { BanderasRoutingModule } from './banderas-routing.module';
import { PaginaprincipalbanderasComponent } from './pages/paginaprincipalbanderas/paginaprincipalbanderas.component';
import { CardpaisComponent } from './components/cardpais/cardpais.component';
import { UnpaisComponent } from './components/unpais/unpais.component';
import { HistorialdepaisesComponent } from './components/historialdepaises/historialdepaises.component';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
    imports: [
        BanderasRoutingModule,
        MaterialModule
    ],
    exports: [
        PaginaprincipalbanderasComponent
    ],
    declarations: [
        PaginaprincipalbanderasComponent,
        CardpaisComponent,
        UnpaisComponent,
        HistorialdepaisesComponent
    ],
    providers: [],
})
export class BanderasModule { }
