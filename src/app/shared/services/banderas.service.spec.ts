import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FlagsService } from './banderas.service';
import { Paises } from '../interfaces/banderas/paises.interface';

describe('FlagsService', () => {
  let service: FlagsService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlagsService]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(FlagsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an observable of Paises[] when calling getBanderasPaises', () => {
    const mockResponse: Paises[] = [
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
    ];

    service.getBanderasPaises().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://restcountries.com/v3.1/all?&fields=name,flags,cca3,capital,population,maps');
    req.flush(mockResponse);
  });

  it('should return an observable of Paises when calling getBanderasPaisesPorPais', () => {
    const mockResponse: Paises = {
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
    };

    service.getBanderasPaisesPorPais('ESP').subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`https://restcountries.com/v3.1/alpha/ESP?fields=name,flags,cca3,capital,population,maps`);
    req.flush(mockResponse);
  });
});
