import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CalendarioComponent } from "./calendario.component";
import { TareasService } from '../../../../shared/services/tareas.service';

xdescribe("CalendarioComponent", () => {
  let component: CalendarioComponent;
  let fixture: ComponentFixture<CalendarioComponent>;
  let myService: TareasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarioComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: TareasService, useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myService = TestBed.inject(TareasService);
  });


  it('should ...', () => {
    expect(component).toBeTruthy();
  });
  
})