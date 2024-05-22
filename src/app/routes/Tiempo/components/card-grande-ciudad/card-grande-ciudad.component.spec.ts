// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { CardGrandeCiudadComponent } from "./card-grande-ciudad.component";
// import { TiempoService } from '../../../../shared/services/tiempo.service';
// import { TiempoPais } from '../../../../shared/interfaces/Tiempo/tiempo-pais-interface';

// const mockTiempoPais: TiempoPais = {
//   name: 'Argentina',
//   tem: 20,
//   temp_min: 15,
//   temp_max: 25,
//   humidity: 50, // Add the humidity property here
//   pressure: 1000,
//   icon: '01d',
//   wind_speed: 10,
//   visibility: 10000,
//   timezone: 0,
//   weatherdescripcion: 'Soleado'
// };

// describe("CardGrandeCiudadComponent", () => {
//   let component: CardGrandeCiudadComponent;
//   let fixture: ComponentFixture<CardGrandeCiudadComponent>;
//   let myService: TiempoService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [CardGrandeCiudadComponent],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       providers: [
//         { provide: TiempoService, useValue: {} },
//       ],
//       imports: []
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CardGrandeCiudadComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     myService = TestBed.inject(TiempoService);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // get result() : TiempoPais {
//   //   return this.serviciopais.sacarpaises
//   // }


//   it('should return result from TiempoService', () => {
//     // myService.sacarpaises = mockTiempoPais;
//     expect(component.result).toBe(myService.sacarpaises);
//   });





// })
