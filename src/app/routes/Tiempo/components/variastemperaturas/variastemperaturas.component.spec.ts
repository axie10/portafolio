/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VariastemperaturasComponent } from './variastemperaturas.component';

describe('VariastemperaturasComponent', () => {
  let component: VariastemperaturasComponent;
  let fixture: ComponentFixture<VariastemperaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariastemperaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariastemperaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
