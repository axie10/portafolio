import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaprincipalComponent } from './components/paginaprincipal/paginaprincipal.component';


const routes: Routes = [

  {
    path: '',
    component: PaginaprincipalComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaPrincipalRoutingModule { }