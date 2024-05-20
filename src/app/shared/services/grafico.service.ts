import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Graficos } from '../interfaces/Tiempo/datos-grafico.interface';
import { enviromnets } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class GraficoService {
    
    constructor(private http:HttpClient) { }

    //PARA LAS TARJETA DE LOS 5 DIAS
    //hacemos alpeticion get para la parte de sacar la tenmperatura de 5 dias
    getTiempo(ciudad:string): Observable<Graficos>{

        //url para sacar la temperatura de muchios dias para el grafuico
        const baseUrl1: string = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
        const url2: string = '&units=metric&APPID=';

        return this.http.get<Graficos>(`${baseUrl1}${ciudad}${url2}${enviromnets.tiempo_key}`)
    }


    //////FUNCION PARA EL BUSCADOR YA QUE METO EL PAIS TAMBIEN Y ASI NO SE CONFUNDE AL BUSCAR CIUDADES CON EL MISMO NOMBRE
    getTiempoBuscador(ciudad:string,pais:string): Observable<Graficos>{

        //url para sacar la temperatura de muchios dias para el grafuico
        const baseUrl1: string = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
        const url2: string = '&units=metric&APPID=';

        return this.http.get<Graficos>(`${baseUrl1}${ciudad},${pais}${url2}${enviromnets.tiempo_key}`)
    }


}