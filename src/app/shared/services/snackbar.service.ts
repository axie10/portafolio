// snackbar.service.ts
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  show(message: string, duration: number, estilo: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: duration,
      data: { message: message },
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: estilo
    });
  }
}