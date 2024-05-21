import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MaterialModule } from './module/material/material.module';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { TareaMatDialogComponent } from './components/task-mat-dialog/task-mat-dialog.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    SnackBarComponent,
    TareaMatDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    Error404PageComponent,
    SnackBarComponent,
    TareaMatDialogComponent
  ]
})
export class SharedModule { }
