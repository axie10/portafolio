import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListatareasComponent } from './listatareas.component';
import { TareasService } from '../../../../shared/services/tareas.service';
import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';


const tareaC: Tareas = {
  id: '1',
  nombre: '',
  descripcion: '1',
  estado: 0,
  fecha: '2024-5-20',
  favorita: 0,
  start: new Date(),
  title: ''
};


describe('ListatareasComponent', () => {
  let component: ListatareasComponent;
  let fixture: ComponentFixture<ListatareasComponent>;
  let tareasService: TareasService;
  let promptSpy: jasmine.Spy;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListatareasComponent],
      providers: [TareasService], // Agregar el servicio al providers
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatareasComponent);
    component = fixture.componentInstance;
    tareasService = TestBed.inject(TareasService); // Inyectar el servicio
    fixture.detectChanges();
    promptSpy = spyOn(window, 'prompt').and.returnValue('Nuevo título'); // mockeamos el prompt para que devuelva un valor fijo
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
    spyOn(tareasService, 'borrarTarea').and.callThrough();
    component.borrarTarea(tarea);
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
    spyOn(tareasService, 'tareasFavoritas').and.callThrough();
    component.anadiraFavorita(tarea);
    expect(tareasService.tareasFavoritas).withContext(tarea.favorita === 1 ? '1' : '');
    console.log(tarea.favorita);
  });


  it('should call editartarea is true', () => {
    const tarea = tareaC;
    const editarTareaSpy = spyOn(tareasService, 'editarTarea').and.callThrough();

    component.editartarea(tarea);

    expect(promptSpy).toHaveBeenCalledTimes(1);
    expect(editarTareaSpy).toHaveBeenCalledTimes(1);
    expect(editarTareaSpy).toHaveBeenCalledWith(tarea, 'Nuevo título');
  });

  it('should call editartarea is undefined', () => {
    const editarTareaSpy = spyOn(tareasService, 'editarTarea').and.callThrough();

    component.editartarea(undefined);
    expect(promptSpy).toHaveBeenCalledTimes(0);
    expect(editarTareaSpy).not.toHaveBeenCalled();
  });

  it('should call editartarea is null', () => {
    const editarTareaSpy = spyOn(tareasService, 'editarTarea').and.callThrough();

    const tarea = tareaC;
    promptSpy.and.returnValue(null);

    component.editartarea(tarea);
  
    expect(promptSpy).toHaveBeenCalledTimes(1);
    expect(editarTareaSpy).not.toHaveBeenCalled();
  });


});
