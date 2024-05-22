import { NgModule } from '@angular/core';
import { ContactoRoutingModule } from './contacto-routing.module';
import { PaginaprincipalcontactoComponent } from './pages/paginaprincipalcontacto/paginaprincipalcontacto.component';



@NgModule({
    imports: [
        ContactoRoutingModule 
    ],
    exports: [
        PaginaprincipalcontactoComponent
    ],
    declarations: [
        PaginaprincipalcontactoComponent
    ],
    providers: [],
})
export class ContactoModule { }