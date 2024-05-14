
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paises } from '../../banderas/interface/paises.interface';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class FlagsService {

    public flags: Paises [] = [];
    public pais?: Paises;
    public pais2?: Paises;

    constructor(
        private http: HttpClient,
        private route: Router
    ) { }

    private baseUrl: string = 'https://restcountries.com/v3.1/all?&fields=name,flags,cca3,capital,population,maps';
    private baseUrl1: string = 'https://restcountries.com/v3.1/alpha/';
    private baseUrl2: string = 'https://restcountries.com/v3.1/name/';

    // FUNCION PARA HACER LA PETICION A LA API DE TODAS LAS BANDERAS
    getBanderasPaises(): Observable<Paises[]>{
        return this.http.get<Paises[]>(`${this.baseUrl}`)
    }

    //LO USAMOS PARA SACAR EL MODAL Y EL INPUT YA QUE NOS PERMITE BUSCAR POR CODIGO DEL PAIS
    getBanderasPaisesPorPais(pais:string): Observable<Paises>{
        return this.http.get<Paises>(`${this.baseUrl1}${pais}?fields=name,flags,cca3,capital,population,maps`)
    }


}