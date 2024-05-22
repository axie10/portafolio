import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaprincipalgifsComponent } from './gifs/pages/paginaprincipalgifs/paginaprincipalgifs.component';


const routes: Routes = [

  {
    path: '',
    component: PaginaprincipalgifsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifssRoutingModule { }