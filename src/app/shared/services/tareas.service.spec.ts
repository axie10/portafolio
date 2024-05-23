import { TestBed } from '@angular/core/testing';
import { TareasService } from './tareas.service';
import { Tareas } from '../interfaces/Tareas/tarea.interface';


const tareaC: Tareas[] = [
    {
        id: '1',
        nombre: 'tarea1',
        descripcion: '1',
        estado: 0,
        fecha: '2024-5-20',
        favorita: 0,
        start: new Date(),
        title: ''
    },
    {
        id: '2',
        nombre: 'tarea2',
        descripcion: '1',
        estado: 0,
        fecha: '2024-5-20',
        favorita: 0,
        start: new Date(),
        title: ''
    },
    {
        id: '3',
        nombre: 'tarea3',
        descripcion: '1',
        estado: 0,
        fecha: '2024-5-20',
        favorita: 0,
        start: new Date(),
        title: ''
    },
]

xdescribe('TareasService', () => {
  let service: TareasService;
  let localStorageSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareasService]
    });
    service = TestBed.inject(TareasService);
    localStorageSpy = spyOn(localStorage, 'getItem').and.returnValue('[]');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize tareas array', () => {
    expect(service.tareas).toEqual([]);
  });

  it('should save tareas to local storage', () => {
    const tarea = tareaC[0];
    service.guardarTarea(tarea);
    expect(localStorageSpy).toHaveBeenCalledTimes(0);
  });

  it('should complete tarea', () => {
    const tarea = tareaC[0];
    service.tareaCompletada(tarea);
    expect(tarea.estado).toBe(1);
  });

  it('should delete tarea', () => {
    const tarea = tareaC[0];
    service.borrarTarea(tarea);
    expect(service.tareas).not.toContain(tarea);
  });

  it('should edit tarea', () => {
    const tarea = tareaC[0];
    const nuevoNombre = 'Nuevo nombre';
    service.editarTarea(tarea, nuevoNombre);
    expect(tarea.nombre).toBe('tarea1');
  });

  it('should get tarea fecha', () => {
    const tarea = tareaC[0];
    const fecha = service.mostrarFechadeTarea(tarea.id);
    expect(fecha).toBe(tarea.fecha);
  });

  it('should clear local storage', () => {
    service.borrarLocalstorage();
    expect(localStorageSpy).toHaveBeenCalledTimes(1);
  });

  it('should mark tarea as favorite', () => {
    const tarea = tareaC[0];
    service.tareasFavoritas(tarea);
    expect(tarea.favorita).toBe(1);
  });

  it('should unmark tarea as favorite', () => {
    const tarea = tareaC[0];
    service.quitardeFavorito(tarea);
    expect(tarea.favorita).toBe(0);
  });

  it('should get tareas calendario', () => {
    const tareasCalendario = service.conseguirTareasCalendario();
    expect(tareasCalendario).toEqual([]);
  });
});
