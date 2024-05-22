import { Component, DoCheck } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { SnackbarService } from './shared/services/snackbar.service';

//INTERFAZ PARA EL MENU
interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck{

  title = 'PortafolioAxie';
  public nombreuser: string = '';

  menuItems: MenuItem[] = [
    {name: 'HOME', route: 'home'},
    {name: 'PORTAFOLIO', route: 'portafolio'},
    {name: 'WEATHERAPP', route: 'tiempo'},
    {name: 'TAREASAPP', route: 'tareas/tareas'},
    {name: 'GIFSSAPP', route: 'gifss'},
    {name: 'BANDERAS', route: 'banderas'},
    {name: 'MAPAS', route: 'selectoresmapa'},
  ];

  constructor(
    private authService: AuthService,
    private snackbarService: SnackbarService
  ) {}

  ngDoCheck(): void {
    // console.log('DoCheck');
    //PARA QUE NOS SALGA EL NOMBRE DE USUARIO EN EL MENU LO SACAMOS DEL SESSIONSTORAGE QUE LO GUARDAMOS CUANDO INICIA SESIÓN
    this.nombreuser = sessionStorage.getItem('user') || '';
  }

  //PARA CERRAR SESION
  onLogout(): void{
    this.authService.logout();
    this.snackbarService.show('Se ha cerrado la sesión', 2000, 'custom-snackbar-rojo');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

}
