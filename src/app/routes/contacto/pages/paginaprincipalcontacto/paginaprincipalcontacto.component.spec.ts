import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PaginaprincipalcontactoComponent } from "./paginaprincipalcontacto.component";

describe("PaginaprincipalcontactoComponent", () => {
  let component: PaginaprincipalcontactoComponent;
  let fixture: ComponentFixture<PaginaprincipalcontactoComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaprincipalcontactoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaprincipalcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

})