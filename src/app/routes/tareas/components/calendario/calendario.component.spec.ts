import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioComponent } from './calendario.component';
import { TareasService } from '../../../../shared/services/tareas.service';
import { of } from 'rxjs';
import { FullCalendarModule } from '@fullcalendar/angular';

describe('CalendarioComponent', () => {
  let component: CalendarioComponent;
  let fixture: ComponentFixture<CalendarioComponent>;
  let tareasService: TareasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarioComponent],
      providers: [TareasService],
      imports: [FullCalendarModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioComponent);
    component = fixture.componentInstance;
    tareasService = TestBed.inject(TareasService); // Inyectar el servicio
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  xit('should call handleDateClick method', () => {
    const mockArg = { dateStr: '2024-05-20' };
    spyOn(window, 'prompt').and.returnValue('Nueva Tarea');
    spyOn(console, 'log');
    spyOn(tareasService, 'guardarTarea').and.returnValue(undefined);
    const reloadSpy = spyOn(window.location, 'reload');
    reloadSpy.and.callFake(() => null); // Modificamos la implementación de reload
    component.handleDateClick(mockArg);
    expect(window.prompt).toHaveBeenCalledWith('Título de la tarea: ');
    expect(console.log).toHaveBeenCalledWith('2024-05-20');
    expect(tareasService.guardarTarea).toHaveBeenCalled();
    expect(reloadSpy).toHaveBeenCalled(); // Verificamos que se haya llamado la función reload
  });
  

});
