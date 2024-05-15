/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaginaprincipalgifsComponent } from './paginaprincipalgifs.component';

describe('PaginaprincipalgifsComponent', () => {
  let component: PaginaprincipalgifsComponent;
  let fixture: ComponentFixture<PaginaprincipalgifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaprincipalgifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaprincipalgifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
