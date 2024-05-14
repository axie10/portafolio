import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Graficos } from '../../Tiempo/interface/datos-grafico.interface';

@Injectable({providedIn: 'root'})
export class GraficoService {
    
    constructor(private http:HttpClient) { }

    //url para sacar la temperatura de muchios dias para el grafuico
    private baseUrl1: string = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
    private apikey1: string = '&units=metric&APPID=512dd503a3814cf115cf65525a59758b';

    //PARA LAS TARJETA DE LOS 5 DIAS
    //hacemos alpeticion get para la parte de sacar la tenmperatura de 5 dias
    getTiempo(ciudad:string): Observable<Graficos>{
        return this.http.get<Graficos>(`${this.baseUrl1}${ciudad}${this.apikey1}`)
    }


}