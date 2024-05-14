import { NgModule } from '@angular/core';
import { BanderasRoutingModule } from './banderas-routing.module';
import { PaginaprincipalbanderasComponent } from './pages/paginaprincipalbanderas/paginaprincipalbanderas.component';
import { CardpaisComponent } from './components/cardpais/cardpais.component';
import { MaterialModule } from '../material/material.module';
import { UnpaisComponent } from './components/unpais/unpais.component';


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
        UnpaisComponent
    ],
    providers: [],
})
export class BanderasModule { }
