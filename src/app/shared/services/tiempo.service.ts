import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { TiempoPais } from '../../routes/Tiempo/interface/tiempo-pais-interface';
import { Tiempo } from '../../routes/Tiempo/interface/tiempo.interface';
import { Autocompleted } from '../../routes/Tiempo/interface/autocompleted.interface';
import { enviromnets } from '../../../environments/environments';


@Injectable({providedIn: 'root'})

export class TiempoService implements OnInit {

    constructor(private http: HttpClient) { }
    ngOnInit(): void {
        this.guardarDatos
    }

    //url para sacar la temperatura de una ciudad
    private baseUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private urlparametros : string = '&units=metric&APPID=';

    //url para sacar el autocompletar
    private baseUrl2: string = 'https://api.openweathermap.org/geo/1.0/direct?q=';
    private urlparametros2 : string = '&limit=5&units=metric&appid=';

    //objeto para guardar los datos
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

    //metodo para obtener el tiempo de una ciudad
    getTiempo(ciudad:string): Observable<Tiempo>{
        return this.http.get<Tiempo>(`${this.baseUrl}${ciudad}${this.urlparametros}${enviromnets.tiempo_key}`)
    }

    //metodo para obtener el autocompletar
    getautocompletar (ciudad:string): Observable<Autocompleted [] | undefined> {
        return this.http.get<Autocompleted []>(`${this.baseUrl2}${ciudad}${this.urlparametros2}${enviromnets.tiempo_autocompletar_key}`)
    }

    //metodo para guardar los datos en el objeto
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