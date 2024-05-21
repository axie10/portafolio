import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioComponent } from './formulario.component';
import { TareasService } from '../../../../shared/services/tareas.service';
import { MaterialModule } from '../../../../shared/module/material/material.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';

const tarea: Tareas = {
    id: '1',
    nombre: '',
    descripcion: '',
    estado: 0,
    fecha: '2024-5-20',
    favorita: 0,
    start: new Date(),
    title: ''
};

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let tareasService: TareasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioComponent],
      providers: [TareasService],
      imports: [
        FullCalendarModule,
        MaterialModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    tareasService = TestBed.inject(TareasService); // Inyectar el servicio
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call guardarTarea method', () => {
    spyOn(window, 'alert');
    spyOn(tareasService, 'guardarTarea').and.returnValue(undefined);
    component.guardarTarea();
    expect(tareasService.guardarTarea).not.toHaveBeenCalled();
  });

  it('should not call guardarTarea method when Tarea.nombre is empty', () => {
    component.Tarea.nombre = '';
    spyOn(window, 'alert');
    spyOn(tareasService, 'guardarTarea');
    component.guardarTarea();
    expect(window.alert).toHaveBeenCalledWith('El nombre de la tarea no puede estar vacio');
    expect(tareasService.guardarTarea).not.toHaveBeenCalled();
  });

  xit('should update Tarea.fecha correctly', () => {
    const expectedDate = '2024-05-20'
    component.obtenerFecha();
    expect(component.Tarea.fecha).toEqual(expectedDate);
  });

});
