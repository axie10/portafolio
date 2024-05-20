import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { TiempoPais } from '../interfaces/Tiempo/tiempo-pais-interface';
import { Tiempo } from '../interfaces/Tiempo/tiempo.interface';
import { Autocompleted } from '../interfaces/Tiempo/autocompleted.interface';
import { enviromnets } from '../../../environments/environments';


@Injectable({providedIn: 'root'})

export class TiempoService implements OnInit {

    constructor(private http: HttpClient) { }
    ngOnInit(): void {
        this.guardarDatos
    }


    //objeto para guardar los datos
    public pais1: TiempoPais = {};

    get sacarpaises(){
        return this.pais1;
    }

    //metodo para obtener el tiempo de una ciudad
    getTiempo(ciudad:string): Observable<Tiempo>{

        //url para sacar la temperatura de una ciudad
        const baseUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
        const urlparametros : string = '&units=metric&APPID=';

        return this.http.get<Tiempo>(`${baseUrl}${ciudad}${urlparametros}${enviromnets.tiempo_key}`)
    }

    //metodo para obtener el autocompletar
    getautocompletar (ciudad:string): Observable<Autocompleted [] | undefined> {

        //url para sacar el autocompletar
        const  baseUrl2: string = 'https://api.openweathermap.org/geo/1.0/direct?q=';
        const  urlparametros2 : string = '&limit=5&units=metric&appid=';

        return this.http.get<Autocompleted []>(`${baseUrl2}${ciudad}${urlparametros2}${enviromnets.tiempo_autocompletar_key}`)
    }

    //metodo para guardar los datos en el objeto
    //el metodo es arcaico, pero es el que hice
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


    ///FUNCION PARA EL BUSCADOR YA QUE METO EL PAIS TAMBIEN Y ASI NO SE CONFUNDE AL BUSCAR CIUDADES CON EL MISMO NOMBRE
    getTiempoBuscador(ciudad:string,pais:string): Observable<Tiempo>{

        //url para sacar la temperatura de una ciudad
        const baseUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
        const urlparametros : string = '&units=metric&APPID=';

        return this.http.get<Tiempo>(`${baseUrl}${ciudad},${pais}${urlparametros}${enviromnets.tiempo_key}`)
    }

}