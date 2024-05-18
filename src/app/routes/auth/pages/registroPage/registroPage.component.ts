import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {v4 as uuid} from 'uuid';
import { User } from '../../../../shared/interfaces/auth/user.interface';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-registroPage',
  templateUrl: './registroPage.component.html',
  styleUrls: ['./registroPage.component.css']
})
export class RegistroPageComponent implements OnInit {

  public Form: FormGroup = this.fb.group({
    email: [[''], [Validators.required, Validators.email]],
    usuario: [[''], Validators.required],
    contraseña: [[''], [Validators.required, Validators.minLength(6)]]
  })

  public user: User = {
    id: uuid(),
    user: '',
    email: '',
    contraseña: ''
  };

  constructor(
    private authService : AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  crearUsuario(){
    // console.log(this.Form.value);
    this.user.email = this.Form.get('email')?.value;
    this.user.user = this.Form.get('usuario')?.value;
    this.user.contraseña = this.Form.get('contraseña')?.value;
    // console.log(this.user);

    this.authService.crearusuario(this.user);

    this.Form.reset();


    this.user = {
      id: uuid(),
      user: '',
      email: '',
      contraseña: ''
    };
  }

}
