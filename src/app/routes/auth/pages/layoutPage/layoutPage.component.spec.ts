import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LayoutPageComponent } from './layoutPage.component';
import { MaterialModule } from '../../../../shared/module/material/material.module';
import { RouterModule } from '@angular/router';
 
describe('LayoutPageComponent', () => {
  let component: LayoutPageComponent;
  let fixture: ComponentFixture<LayoutPageComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutPageComponent],
      imports: [ 
        MaterialModule,
        RouterModule
      ],
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should render layout page', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-layoutPage')).toBeNull();
  })
});