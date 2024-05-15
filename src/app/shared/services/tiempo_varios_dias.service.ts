import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List, Newtiempo } from '../../routes/Tiempo/interface/new-interface.interface';


@Injectable({providedIn: 'root'})

export class TiempoVariosDiasService {

    constructor(private http:HttpClient) { 
    }

    //LISTA DE 5 DIAS
    //variable para sacar la temperatura de varuios dias
    public date: List [] | undefined;

    //url para sacar lñ atemperatera de varuios dias
    private baseUrl: string = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
    private apikey : string = '&units=metric&cnt=5&APPID=512dd503a3814cf115cf65525a59758b';

    get result(){
        // console.log(this.date)
        return this.date;
    }

    //PARA LAS TARJETA DE LOS 5 DIAS
    //hacemos alpeticion get para la parte de sacar la tenmperatura de 5 dias
    getTiempo(ciudad:string): Observable<Newtiempo>{
        return this.http.get<Newtiempo>(`${this.baseUrl}${ciudad}${this.apikey}`)
    }

    //sacamos los datos para las tarjetas de 5 dias
    guardarDatos(value: Newtiempo){
        this.date = value.list;
        // console.log(value)
    }

   
    








}