/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardpaisComponent } from './cardpais.component';

describe('CardpaisComponent', () => {
  let component: CardpaisComponent;
  let fixture: ComponentFixture<CardpaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardpaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
