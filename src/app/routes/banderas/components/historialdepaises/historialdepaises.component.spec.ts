import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HistorialdepaisesComponent } from './historialdepaises.component';
 
describe('HistorialdepaisesComponent', () => {
  let component: HistorialdepaisesComponent;
  let fixture: ComponentFixture<HistorialdepaisesComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialdepaisesComponent]
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialdepaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should initialize historialpaises from localStorage', () => {
    const historialpaises = ['Spain', 'France', 'Germany'];
    sessionStorage.setItem('historialpaises', JSON.stringify(historialpaises));
    component = new HistorialdepaisesComponent();
    expect(component.historialpaises).toEqual(historialpaises);
  });
});
