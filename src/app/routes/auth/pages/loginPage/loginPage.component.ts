import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';



@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit{

  public Form: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    contraseña: ['', Validators.required],
  });

  constructor(
    // private authservice: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private authService : AuthService,
  ) { }
  ngOnInit(): void {
    // alert('Debe iniciar sesión para acceder a la aplicación.');
  }

  onLogin(): void {
    const usuario = this.Form.get('usuario')?.value;
    const contraseña = this.Form.get('contraseña')?.value;

    if(this.authService.validarUsuario(usuario, contraseña)){
      this.router.navigate(['/tiempo']);
    }
  }

}
