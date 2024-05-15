/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TareasFavoritasComponent } from './tareasFavoritas.component';

describe('TareasFavoritasComponent', () => {
  let component: TareasFavoritasComponent;
  let fixture: ComponentFixture<TareasFavoritasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasFavoritasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
