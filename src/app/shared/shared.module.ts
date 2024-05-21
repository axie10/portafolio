import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MaterialModule } from './module/material/material.module';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    Error404PageComponent,
    SnackBarComponent
  ]
})
export class SharedModule { }
