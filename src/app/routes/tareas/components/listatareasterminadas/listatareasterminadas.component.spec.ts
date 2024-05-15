/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListatareasterminadasComponent } from './listatareasterminadas.component';

describe('ListatareasterminadasComponent', () => {
  let component: ListatareasterminadasComponent;
  let fixture: ComponentFixture<ListatareasterminadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListatareasterminadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatareasterminadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
