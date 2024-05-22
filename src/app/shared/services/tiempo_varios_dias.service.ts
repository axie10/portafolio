import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List, Newtiempo } from '../interfaces/Tiempo/new-interface.interface';
import { enviromnets } from '../../../environments/environments';


@Injectable({providedIn: 'root'})

export class TiempoVariosDiasService {

    constructor(private http:HttpClient) { }
    
    //LISTA DE 5 DIAS
    //variable para sacar la temperatura de varuios dias
    public date: List [] | undefined;

    //PARA SACAR LOS DATOS DE LOS 5 DIAS
    get result(){
        return this.date;
    }

    //PARA LAS TARJETA DE LOS 5 DIAS
    //hacemos alpeticion get para la parte de sacar la tenmperatura de 5 dias
    getTiempo(ciudad:string): Observable<Newtiempo>{

        //url para sacar lñ atemperatera de varuios dias
        const baseUrl: string = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
        const url2 : string = '&units=metric&cnt=6&APPID=';

        return this.http.get<Newtiempo>(`${baseUrl}${ciudad}${url2}${enviromnets.tiempo_key}`)
    }

    //sacamos los datos para las tarjetas de 5 dias
    guardarDatos(value: Newtiempo){
        this.date = value.list;
    }


    //////FUNCION PARA EL BUSCADOR YA QUE METO EL PAIS TAMBIEN Y ASI NO SE CONFUNDE AL BUSCAR CIUDADES CON EL MISMO NOMBRE
    getTiempoBuscador(ciudad:string,pais:string): Observable<Newtiempo>{

        //url para sacar lñ atemperatera de varuios dias
        const baseUrl: string = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
        const url2 : string = '&units=metric&cnt=6&APPID=';

        return this.http.get<Newtiempo>(`${baseUrl}${ciudad},${pais}${url2}${enviromnets.tiempo_key}`)
    }

}