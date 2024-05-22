import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MaterialModule } from './module/material/material.module';
import { SnackbarComponent } from './components/snack-bar/snack-bar.component';
import { TareaMatDialogComponent } from './components/task-mat-dialog/task-mat-dialog.component';
import { MatDialogBasicoComponent } from './components/mat-dialog-basico/mat-dialog-basico.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    TareaMatDialogComponent,
    SnackbarComponent,
    MatDialogBasicoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    Error404PageComponent,
    TareaMatDialogComponent,
    SnackbarComponent,
    MatDialogBasicoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class SharedModule { }
