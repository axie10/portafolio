import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListatareasComponent } from './listatareas.component';
import { TareasService } from '../../../../shared/services/tareas.service';

describe('ListatareasComponent', () => {
  let component: ListatareasComponent;
  let fixture: ComponentFixture<ListatareasComponent>;
  let tareasService: TareasService;

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
    spyOn(tareasService, 'borrarTarea').and.callThrough();
    component.borrarTarea(tarea);
    expect(tareasService.borrarTarea).toHaveBeenCalledWith(tarea);
  });

});
