import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tareas } from '../../interfaces/Tareas/tarea.interface';

@Component({
  selector: 'app-task-mat-dialog',
  template: `
  <div class="mat-dialog-container">
  <h2 class="mat-dialog-title" mat-dialog-title>{{ isEdit ? 'Editar Tarea' : 'Añadir Tarea' }}</h2>
    <mat-dialog-content>
      <form class="form">
        <mat-form-field>
          <input class="mat-input-element" matInput name="nombre" [(ngModel)]="data.tarea.nombre">
        </mat-form-field>
        <mat-form-field>
          <textarea matInput name="descripcion" [(ngModel)]="data.tarea.descripcion"></textarea>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions class="mat-dialog-actions">
      <button class="mat-button" mat-button [mat-dialog-close]="true">Guardar</button>
      <button class="mat-button-rojo" mat-button [mat-dialog-close]="false">Cancelar</button>
    </mat-dialog-actions>

  </div>
    
  `,
  styleUrls: ['./task-mat-dialog.component.css']
})
export class TareaMatDialogComponent {

  //CREAMOS ESTAS PROPIEDADES PARA LLEVARNOS LOS DATOS DE LA TAREA Y SI ESTAMOS EDITANDO O NO
  public tarea: Tareas;
  public isEdit: boolean;

  constructor(
    public dialogRef: MatDialogRef<TareaMatDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    //RECIBIMOS LOS DATOS DE LA TAREA Y SI ESTAMOS EDITANDO O NO
    public data: { tarea:Tareas, isEdit: boolean }
  ) {
    //ASIGNAMOS LOS DATOS A LAS PROPIEDADES
    this.tarea = data.tarea;
    this.isEdit = data.isEdit;
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
