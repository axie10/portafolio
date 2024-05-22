import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardCiudadComponent } from './card-ciudad.component';
import { TiempoService } from '../../../../shared/services/tiempo.service';
import { Tiempo } from '../../../../shared/interfaces/Tiempo/tiempo.interface';
import { TiempoPais } from '../../../../shared/interfaces/Tiempo/tiempo-pais-interface';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardCiudadComponent', () => {
  let component: CardCiudadComponent;
  let fixture: ComponentFixture<CardCiudadComponent>;
  let tiempoService: jasmine.SpyObj<TiempoService>;

  beforeEach(async () => {
    const tiempoServiceSpy = jasmine.createSpyObj('TiempoService', ['sacarpaises'], { sacarpaises: of({} as TiempoPais) });

    await TestBed.configureTestingModule({
      declarations: [ CardCiudadComponent ],
      providers: [
        { provide: TiempoService, useValue: tiempoServiceSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    tiempoService = TestBed.inject(TiempoService) as jasmine.SpyObj<TiempoService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial url values', () => {
    expect(component.url).toBe('https://openweathermap.org/img/wn/');
    expect(component.url2).toBe('@2x.png');
  });

  // it('should return result from TiempoService', () => {
  //   const mockTiempoPais: TiempoPais = { 
  //     name: 'Argentina',
  //     tem: 20,
  //     temp_min: 15,
  //     temp_max: 25,
  //     humidity: 50,
  //     pressure: 1000,
  //     icon: '01d',
  //     wind_speed: 10,
  //     visibility: 10000,
  //     timezone: 0,
  //     weatherdescripcion: 'Soleado'};
  //   tiempoService.sacarpaises = mockTiempoPais;
  //   expect(component.result).toBe(mockTiempoPais);
  // });

  // it('should have pais property defined', () => {
  //   const mockTiempo: Tiempo = { /* propiedades de Tiempo */ };
  //   component.pais = mockTiempo;
  //   expect(component.pais).toBe(mockTiempo);
  // });
});
