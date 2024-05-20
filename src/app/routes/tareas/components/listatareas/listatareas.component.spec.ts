// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ListatareasComponent } from './listatareas.component';
// import { TareasService } from '../../../../shared/services/tareas.service';
// import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';
// import { of } from 'rxjs';


// describe('ListatareasComponent', () => {
//   let component: ListatareasComponent;
//   let fixture: ComponentFixture<ListatareasComponent>;
//   let tareasService: jasmine.SpyObj<TareasService>;

//   beforeEach(async () => {
//     const tareasServiceSpy = jasmine.createSpyObj('TareasService', ['tareaCompletada', 'borrarTarea', 'editarTarea', 'mostrarFechadeTarea', 'tareasFavoritas'], { tareas: of([]) });

//     await TestBed.configureTestingModule({
//       declarations: [ ListatareasComponent ],
//       providers: [
//         { provide: TareasService, useValue: tareasServiceSpy }
//       ]
//     })
//     .compileComponents();

//     tareasService = TestBed.inject(TareasService) as jasmine.SpyObj<TareasService>;
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ListatareasComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // it('should get listadoTareas', () => {
//   //   const tareasMock: Tareas[] = [{ id: '1', nombre: 'Test Tarea', descripcion: 'Descripción', estado: 0, fecha: '2023-05-20', favorita: 0, start: new Date(), title: 'Titulo Test' }];
//   //   tareasService.tareas = tareasMock;
//   //   expect(component.listadoTareas).toEqual(tareasMock);
//   // });

//   // it('should call tareaCompletada', () => {
//   //   const tareaMock: Tareas = { id: '1', nombre: 'Test Tarea', descripcion: 'Descripción', estado: 0, fecha: '2023-05-20', favorita: 0, start: new Date(), title: 'Titulo Test' };
//   //   component.tareaCompletada(tareaMock);
//   //   expect(tareasService.tareaCompletada).toHaveBeenCalledWith(tareaMock);
//   // });

//   // it('should call borrarTarea', () => {
//   //   const tareaMock: Tareas = { id: '1', nombre: 'Test Tarea', descripcion: 'Descripción', estado: 0, fecha: '2023-05-20', favorita: 0, start: new Date(), title: 'Titulo Test' };
//   //   component.borrarTarea(tareaMock);
//   //   expect(tareasService.borrarTarea).toHaveBeenCalledWith(tareaMock);
//   // });

//   // it('should call editarTarea with prompt value', () => {
//   //   const tareaMock: Tareas = { id: '1', nombre: 'Test Tarea', descripcion: 'Descripción', estado: 0, fecha: '2023-05-20', favorita: 0, start: new Date(), title: 'Titulo Test' };
//   //   spyOn(window, 'prompt').and.returnValue('Nuevo Titulo');
//   //   component.editartarea(tareaMock);
//   //   expect(tareasService.editarTarea).toHaveBeenCalledWith(tareaMock, 'Nuevo Titulo');
//   // });

//   // it('should not call editarTarea when prompt is cancelled', () => {
//   //   const tareaMock: Tareas = { id: '1', nombre: 'Test Tarea', descripcion: 'Descripción', estado: 0, fecha: '2023-05-20', favorita: 0, start: new Date(), title: 'Titulo Test' };
//   //   spyOn(window, 'prompt').and.returnValue(null);
//   //   component.editartarea(tareaMock);
//   //   expect(tareasService.editarTarea).not.toHaveBeenCalled();
//   // });

//   // it('should show and hide fechaTemplate', () => {
//   //   const fechaMock = '2023-05-20';
//   //   tareasService.mostrarFechadeTarea.and.returnValue(fechaMock);
//   //   component.mostrarfecha('1');
//   //   expect(component.fechaTemplate).toBe(fechaMock);
//   //   expect(component.idParaFecha).toBe('1');

//   //   component.quitarFecha();
//   //   expect(component.fechaTemplate).toBe('');
//   //   expect(component.idParaFecha).toBe('');
//   // });

//   // it('should call anadiraFavorita', () => {
//   //   const tareaMock: Tareas = { id: '1', nombre: 'Test Tarea', descripcion: 'Descripción', estado: 0, fecha: '2023-05-20', favorita: 0, start: new Date(), title: 'Titulo Test' };
//   //   component.anadiraFavorita(tareaMock);
//   //   expect(tareasService.tareasFavoritas).toHaveBeenCalledWith(tareaMock);
//   // });
// });
