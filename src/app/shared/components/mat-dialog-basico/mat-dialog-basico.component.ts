import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog-basico',
  template: `
  <div class="mat-dialog-container">
    <mat-dialog-content class="texto">
      <p>{{data}}</p>
    </mat-dialog-content>
    <mat-dialog-actions class="mat-dialog-actions">
      <button class="mat-button" mat-button (click)="onClose(true)">Sí</button>
      <button class="mat-button-no" mat-button (click)="onClose(false)">No</button>
    </mat-dialog-actions>
  </div>
  `,
  styleUrls: ['./mat-dialog-basico.component.css']
})
export class MatDialogBasicoComponent {

  constructor(
    public dialogRef: MatDialogRef<MatDialogBasicoComponent>,
    @Inject(MAT_DIALOG_DATA)
    //RECIBIMOS LOS DATOS DE LA TAREA Y SI ESTAMOS EDITANDO O NO
    public data : string
  ) {}

  onClose(result: boolean): void {
    this.dialogRef.close(result);
  }

}
