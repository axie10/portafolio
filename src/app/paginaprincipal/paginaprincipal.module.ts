import { NgModule } from '@angular/core';
import { PaginaprincipalComponent } from './components/paginaprincipal/paginaprincipal.component';
import { PaginaPrincipalRoutingModule } from './paginaprincipal-routing.module';


@NgModule({
    imports: [
        PaginaPrincipalRoutingModule
    ],
    exports: [
        PaginaprincipalComponent
    ],
    declarations: [
        PaginaprincipalComponent
    ],
    providers: [],
})
export class PaginaprincipalModule { }
