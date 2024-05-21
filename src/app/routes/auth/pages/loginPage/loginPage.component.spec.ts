import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { LoginPageComponent } from './loginPage.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../../shared/module/material/material.module';
 
describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService: AuthService;
  let router: Router;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, MaterialModule],
      declarations: [LoginPageComponent],
      providers: [AuthService, FormBuilder],
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should call onLogin when form is valid', () => {
    const usuario = 'usuario';
    const contraseña = 'contraseña';
    component.Form.get('usuario')?.setValue(usuario);
    component.Form.get('contraseña')?.setValue(contraseña);
    spyOn(authService, 'validarUsuario').and.returnValue(true);
    spyOn(router, 'navigate');
    component.onLogin();
    expect(authService.validarUsuario).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledTimes(1);
  });
 
  it('should not call onLogin when form is invalid', () => {
    component.Form.get('usuario')?.setValue('');
    component.Form.get('contraseña')?.setValue('');
    component.Form.updateValueAndValidity(); // Actualiza la validez del formulario
    spyOn(authService, 'validarUsuario');
    spyOn(router, 'navigate');
    component.onLogin();
    expect(authService.validarUsuario).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});