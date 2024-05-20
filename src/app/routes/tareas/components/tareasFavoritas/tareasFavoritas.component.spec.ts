import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareasFavoritasComponent } from './tareasFavoritas.component';
import { TareasService } from '../../../../shared/services/tareas.service';
import { of } from 'rxjs';

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
    const tarea: any = { id: 1, titulo: 'Tarea 1', descripcion: 'Descripción de la tarea 1' };
    spyOn(tareasService, 'tareaCompletada').and.callThrough();
    component.tareaCompletada(tarea);
    expect(tareasService.tareaCompletada).toHaveBeenCalledWith(tarea);
  });

  it('should call borrarTarea method', () => {
    const tarea: any = { id: 1, titulo: 'Tarea 1', descripcion: 'Descripción de la tarea 1' };
    spyOn(console, 'log');
    spyOn(tareasService, 'borrarTarea').and.callThrough();
    component.borrarTarea(tarea);
    expect(console.log).toHaveBeenCalledWith(tarea);
    expect(tareasService.borrarTarea).toHaveBeenCalledWith(tarea);
  });

});
