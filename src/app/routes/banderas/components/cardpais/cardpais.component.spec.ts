import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardpaisComponent } from "./cardpais.component";
import { FlagsService } from '../../../../shared/services/banderas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


xdescribe("CardpaisComponent", () => {
  let component: CardpaisComponent;
  let fixture: ComponentFixture<CardpaisComponent>;
  let myService: FlagsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardpaisComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [{ provide: FlagsService, useValue: {} }],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    myService = TestBed.inject(FlagsService);
  });

  it('should ...', () => {
    expect(component).toBeTruthy();
  });

})