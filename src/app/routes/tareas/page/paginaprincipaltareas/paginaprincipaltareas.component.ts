import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../../shared/services/tareas.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogBasicoComponent } from '../../../../shared/components/mat-dialog-basico/mat-dialog-basico.component';

@Component({
  selector: 'app-paginaprincipaltareas',
  templateUrl: './paginaprincipaltareas.component.html',
  styleUrls: ['./paginaprincipaltareas.component.css']
})
export class PaginaprincipaltareasComponent implements OnInit {

  constructor(
    private listadoTareas: TareasService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }


  openEditDialog2(): void {

    const dialogRef = this.dialog.open(MatDialogBasicoComponent, {
      width: '50%',
      data: '¿Estas seguro de que quieres borrar todas las tareas?',
    });
  
    dialogRef.afterClosed().subscribe(result => {
  
      if (!result) {
        return;
      } else {
        this.listadoTareas.borrarLocalstorage();
      }
  
    });
  }


}
