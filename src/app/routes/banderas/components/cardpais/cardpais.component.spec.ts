import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CardpaisComponent } from './cardpais.component';
import { FlagsService } from '../../../../shared/services/banderas.service';
import { of } from 'rxjs';
import { Paises } from '../../../../shared/interfaces/banderas/paises.interface';
import { MaterialModule } from '../../../../shared/module/material/material.module';

const paisesMock: Paises[] = [
  {
    flags: {
      png: 'https://example.com/spain.png',
      svg: 'https://example.com/spain.svg',
      alt: 'Flag of Spain'
    },
    name: {
      common: 'Spain',
      official: 'Kingdom of Spain',
      nativeName: {
        spa: {
          official: 'Reino de España',
          common: 'España'
        }
      }
    },
    cca3: 'ESP',
    capital: ['Madrid'],
    maps: {
      googleMaps: 'https://www.google.com/maps/place/Madrid,+Spain',
      openStreetMaps: 'https://www.openstreetmap.org/#map=12/40.4168/-3.7038'
    },
    population: 46754778
  },
  {
    flags: {
      png: 'https://example.com/france.png',
      svg: 'https://example.com/france.svg',
      alt: 'Flag of France'
    },
    name: {
      common: 'France',
      official: 'French Republic',
      nativeName: {
        fra: {
          official: 'République française',
          common: 'France'
        }
      }
    },
    cca3: 'FRA',
    capital: ['Paris'],
    maps: {
      googleMaps: 'https://www.google.com/maps/place/Paris,+France',
      openStreetMaps: 'https://www.openstreetmap.org/#map=12/48.8567/2.2943'
    },
    population: 67027115
  },
  {
    flags: {
      png: 'https://example.com/germany.png',
      svg: 'https://example.com/germany.svg',
      alt: 'Flag of Germany'
    },
    name: {
      common: 'Germany',
      official: 'Federal Republic of Germany',
      nativeName: {
        deu: {
          official: 'Bundesrepublik Deutschland',
          common: 'Deutschland'
        }
      }
    },
    cca3: 'DEU',
    capital: ['Berlin'],
    maps: {
      googleMaps: 'https://www.google.com/maps/place/Berlin,+Germany',
      openStreetMaps: 'https://www.openstreetmap.org/#map=12/52.5200/13.4050'
    },
    population: 83166700
  }
];
 
describe('CardpaisComponent', () => {
  let component: CardpaisComponent;
  let fixture: ComponentFixture<CardpaisComponent>;
  let flagsServiceSpy: jasmine.SpyObj<FlagsService>;
 
  beforeEach(async () => {
    flagsServiceSpy = jasmine.createSpyObj('FlagsService', ['getBanderasPaises']);
    flagsServiceSpy.getBanderasPaises.and.returnValue(of(paisesMock));
 
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [CardpaisComponent],
      providers: [{ provide: FlagsService, useValue: flagsServiceSpy }]
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(CardpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should fetch flags on init', () => {
    expect(flagsServiceSpy.getBanderasPaises).toHaveBeenCalledTimes(1);
    expect(component.flags.length).toBe(3);
  });
 
  it('should emit pais when pasarpais is called', () => {
    const pais = paisesMock[0].name.common;
    spyOn(component.paises2, 'emit');
    component.pasarpais(pais);
    expect(component.paises2.emit).toHaveBeenCalledWith(pais);
  });
});