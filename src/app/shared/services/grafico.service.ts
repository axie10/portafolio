import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Graficos } from '../../routes/Tiempo/interface/datos-grafico.interface';
import { enviromnets } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class GraficoService {
    
    constructor(private http:HttpClient) { }

    //url para sacar la temperatura de muchios dias para el grafuico
    private baseUrl1: string = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
    private url2: string = '&units=metric&APPID=';

    //PARA LAS TARJETA DE LOS 5 DIAS
    //hacemos alpeticion get para la parte de sacar la tenmperatura de 5 dias
    getTiempo(ciudad:string): Observable<Graficos>{
        return this.http.get<Graficos>(`${this.baseUrl1}${ciudad}${this.url2}${enviromnets.tiempo_key}`)
    }


}