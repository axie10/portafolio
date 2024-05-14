import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaprincipalcontactoComponent } from './pages/paginaprincipalcontacto/paginaprincipalcontacto.component';



const routes: Routes = [

  {
    path: '',
    component: PaginaprincipalcontactoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }