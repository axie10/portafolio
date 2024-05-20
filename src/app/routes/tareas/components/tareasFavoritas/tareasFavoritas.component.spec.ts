// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { TareasFavoritasComponent } from "./tareasFavoritas.component";
// import { TareasService } from '../../../../shared/services/tareas.service';
// import { Tareas } from '../../../../shared/interfaces/Tareas/tarea.interface';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// const mockTareas: Tareas [] = [
//   {
//     id: '1',
//     nombre: 'Tarea 1',
//     descripcion: 'Descripción de la tarea 1',
//     estado: 0,
//     fecha: '2022-01-01',
//     favorita: 1,
//     start: new Date(),
//     title: 'Tarea favorita'
//   },
//   {
//     id: '2',
//     nombre: 'Tarea 2',
//     descripcion: 'Descripción de la tarea 2',
//     estado: 0,
//     fecha: '2022-01-01',
//     favorita: 0,
//     start: new Date(),
//     title: 'Tarea favorita'
//   },
//   {
//     id: '3',
//     nombre: 'Tarea 3',
//     descripcion: 'Descripción de la tarea 3',
//     estado: 0,
//     fecha: '2022-01-01',
//     favorita: 0,
//     start: new Date(),
//     title: 'Tarea favorita'
//   }
// ];


// describe("TareasFavoritasComponent", () => {
//   let component: TareasFavoritasComponent;
//   let fixture: ComponentFixture<TareasFavoritasComponent>;
//   let myService: TareasService;
  
//   beforeEach( () => {
//     TestBed.configureTestingModule({
//       declarations: [TareasFavoritasComponent],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       providers: [{ provide: TareasService, useValue: {} }],
//       imports: [
//         HttpClientTestingModule
//       ]
//     }).compileComponents();
//   });
  
//   beforeEach(() => {
//     fixture = TestBed.createComponent(TareasFavoritasComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     myService = TestBed.inject(TareasService);
//   });
  
//   it('should ...', () => {
//     expect(component).toBeTruthy();
//   });

//   // tareaCompletada(value:Tareas){
//   //   this.listadotareas.tareaCompletada(value);
//   // }

  
// });
