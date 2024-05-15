/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GifsCardComponent } from './gifs-card.component';

describe('GifsCardComponent', () => {
  let component: GifsCardComponent;
  let fixture: ComponentFixture<GifsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
