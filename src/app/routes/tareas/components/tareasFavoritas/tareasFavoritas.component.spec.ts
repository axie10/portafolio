import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareasFavoritasComponent } from './tareasFavoritas.component';
import { TareasService } from '../../../../shared/services/tareas.service';
import { of } from 'rxjs';
import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';

const tareaC: Tareas = {
  id: '1',
  nombre: '',
  descripcion: '1',
  estado: 0,
  fecha: '2024-5-20',
  favorita: 1,
  start: new Date(),
  title: ''
};

describe('TareasFavoritasComponent', () => {
  let component: TareasFavoritasComponent;
  let fixture: ComponentFixture<TareasFavoritasComponent>;
  let tareasService: TareasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TareasFavoritasComponent],
      providers: [TareasService], // Agregar el servicio al providers
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasFavoritasComponent);
    component = fixture.componentInstance;
    tareasService = TestBed.inject(TareasService); // Inyectar el servicio
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call tareaCompletada method', () => {
    const tarea = tareaC;
    spyOn(tareasService, 'tareaCompletada').and.callThrough();
    component.tareaCompletada(tarea);
    expect(tareasService.tareaCompletada).toHaveBeenCalledWith(tarea);
  });

  it('should call borrarTarea method', () => {
    const tarea = tareaC;
    spyOn(console, 'log');
    spyOn(tareasService, 'borrarTarea').and.callThrough();
    component.borrarTarea(tarea);
    expect(console.log).toHaveBeenCalledWith(tarea);
    expect(tareasService.borrarTarea).toHaveBeenCalledWith(tarea);
  });

  it('should call mostrarFecha', () => {
    const fecha = '2024-5-20';
    spyOn(tareasService, 'mostrarFechadeTarea').and.callThrough();
    component.mostrarfecha(fecha);
    expect(tareasService.mostrarFechadeTarea).toHaveBeenCalledWith(fecha);
  });

  it('should call quitarFecha', () => {
    component.fechaTemplate = '2024-5-20';
    component.quitarFecha();
    expect(component.fechaTemplate).toBe('');
  });

  it('should call anadiraFavorita', () => {
    const tarea = tareaC;
    console.log(tarea.favorita);
    spyOn(tareasService, 'quitardeFavorito').and.callThrough();
    component.quitardeFavorito(tarea);
    expect(tareasService.quitardeFavorito).withContext(tarea.favorita === 0 ? '1' : '');
    console.log(tarea.favorita);
  });







});
