import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { VariastemperaturasComponent } from "./variastemperaturas.component";
import { TiempoVariosDiasService } from '../../../../shared/services/tiempo_varios_dias.service';

describe("VariastemperaturasComponent", () => {
  let component: VariastemperaturasComponent;
  let fixture: ComponentFixture<VariastemperaturasComponent>;
  let myService: TiempoVariosDiasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VariastemperaturasComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: TiempoVariosDiasService, useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariastemperaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myService = TestBed.inject(TiempoVariosDiasService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})