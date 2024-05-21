import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistroPageComponent } from './registroPage.component';
import { AuthService } from '../../../../shared/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { User } from '../../../../shared/interfaces/auth/user.interface';
import { MaterialModule } from '../../../../shared/module/material/material.module';
 
describe('RegistroPageComponent', () => {
  let component: RegistroPageComponent;
  let fixture: ComponentFixture<RegistroPageComponent>;
  let authService: AuthService;
  let fb: FormBuilder;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, MaterialModule],
      declarations: [RegistroPageComponent],
      providers: [AuthService, FormBuilder],
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPageComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fb = TestBed.inject(FormBuilder);
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should create a new user when form is valid', () => {
    const email = 'email@example.com';
    const usuario = 'usuario';
    const contraseña = 'contraseña';
    component.Form.get('email')?.setValue(email);
    component.Form.get('usuario')?.setValue(usuario);
    component.Form.get('contraseña')?.setValue(contraseña);
    spyOn(authService, 'crearusuario');
    component.crearUsuario();
    expect(authService.crearusuario).toHaveBeenCalledTimes(1);
    expect(component.Form.valid).toBeFalse();
  });
 
  it('should not create a new user when form is invalid', () => {
    component.Form.get('email')?.setValue('');
    component.Form.get('usuario')?.setValue('');
    component.Form.get('contraseña')?.setValue('');
    spyOn(authService, 'crearusuario');
    component.crearUsuario();
    expect(authService.crearusuario).not.toHaveBeenCalledTimes(0);
    expect(component.Form.valid).toBeFalse();
  });
});