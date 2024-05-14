import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { TiempoPais } from '../../Tiempo/interface/tiempo-pais-interface';
import { Tiempo } from '../../Tiempo/interface/tiempo.interface';
import { Autocompleted } from '../../Tiempo/interface/autocompleted.interface';


@Injectable({providedIn: 'root'})

export class TiempoService implements OnInit {

    constructor(private http: HttpClient) { }
    ngOnInit(): void {
        this.guardarDatos
    }

    private baseUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private apikey : string = '&units=metric&APPID=512dd503a3814cf115cf65525a59758b';

    private baseUrl2: string = 'https://api.openweathermap.org/geo/1.0/direct?q=';
    private apikey2 : string = '&limit=5&units=metric&appid=1f9ccab4cdafe0e22916708e85513df9';

    public pais1: TiempoPais = {
        name: '',
        tem: 0,
        temp_min: 0,
        temp_max: 0,
        humidity: 0,
        pressure: 0,
        icon: '',
        wind_speed: 0,
        visibility: 0,
        timezone: 0,
        weatherdescripcion: ''
    };

    get sacarpaises(){
        return this.pais1;
    }

    getTiempo(ciudad:string): Observable<Tiempo>{
        return this.http.get<Tiempo>(`${this.baseUrl}${ciudad}${this.apikey}`)
    }

    getautocompletar (ciudad:string): Observable<Autocompleted [] | undefined> {
        
        return this.http.get<Autocompleted []>(`${this.baseUrl2}${ciudad}${this.apikey2}`).
        pipe(
            catchError(error => of (undefined) )
        )
    }

    guardarDatos(pais: Tiempo){

        this.pais1 = {
            name: pais.name,
            tem: pais.main.temp,
            temp_min: pais.main.temp_min,
            temp_max: pais.main.temp_max,
            humidity: pais.main.humidity,
            pressure: pais.main.pressure,
            icon: pais.weather[0].icon,
            wind_speed: pais.wind.speed,
            visibility: pais.visibility,
            timezone: pais.timezone,
            weatherdescripcion: pais.weather[0].description
        };
    }

}