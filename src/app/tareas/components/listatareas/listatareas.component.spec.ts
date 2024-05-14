/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListatareasComponent } from './listatareas.component';

describe('ListatareasComponent', () => {
  let component: ListatareasComponent;
  let fixture: ComponentFixture<ListatareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListatareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
