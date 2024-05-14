import { Component } from '@angular/core';
import { AuthService } from './auth/service/auth.service';
import { Router } from '@angular/router';

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
export class AppComponent {
  title = 'PortafolioAxie';

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
    private router: Router
  ) {}

  //PARA OBTENER EL USUARIO ACTUAL Y SACARLO POR PANTALLA
  get currentuserValue() {
    return this.authService.currentuserValue;
  }

  //PARA CERRAR SESION
  onLogout() {
    this.authService.logout();
    window.location.reload();
  }

}
