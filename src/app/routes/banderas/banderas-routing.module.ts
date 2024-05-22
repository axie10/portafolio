import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaprincipalbanderasComponent } from './pages/paginaprincipalbanderas/paginaprincipalbanderas.component';


const routes: Routes = [

  {
    path: '',
    component: PaginaprincipalbanderasComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanderasRoutingModule { }