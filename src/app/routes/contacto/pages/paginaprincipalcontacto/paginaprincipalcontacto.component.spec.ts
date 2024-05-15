/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaginaprincipalcontactoComponent } from './paginaprincipalcontacto.component';

describe('PaginaprincipalcontactoComponent', () => {
  let component: PaginaprincipalcontactoComponent;
  let fixture: ComponentFixture<PaginaprincipalcontactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaprincipalcontactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaprincipalcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
