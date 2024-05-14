/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaginaprincipalbanderasComponent } from './paginaprincipalbanderas.component';

describe('PaginaprincipalbanderasComponent', () => {
  let component: PaginaprincipalbanderasComponent;
  let fixture: ComponentFixture<PaginaprincipalbanderasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaprincipalbanderasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaprincipalbanderasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
