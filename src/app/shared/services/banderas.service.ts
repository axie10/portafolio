
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paises } from '../../banderas/interface/paises.interface';

@Injectable({providedIn: 'root'})
export class FlagsService {

    public flags: Paises [] = [];
    public pais?: Paises;
    public pais2?: Paises;

    constructor(
        private http: HttpClient
    ) { }

    private baseUrl: string = 'https://restcountries.com/v3.1/all?&fields=name,flags,cca3,capital,population,maps';
    private baseUrl1: string = 'https://restcountries.com/v3.1/alpha/';
    private baseUrl2: string = 'https://restcountries.com/v3.1/name/';

//TODAS LAS BANDERAS
    // FUNCION PARA HACER LA PETICION A LA API DE TODAS LAS BANDERAS
    getBanderasPaises(): Observable<Paises[]>{
        return this.http.get<Paises[]>(`${this.baseUrl}`)
    }
    // NOS SUBCRRIBIMOS A LA FUNCION DE SACAR TODAS LAS BANDERAS
    nosSubcribimos(){
        this.getBanderasPaises()
            .subscribe( data => {
                this.flags = data;
            }) 
    }
    // FUNCION PARA IMPRIMIR TODAS LAS BANDERAS
    get sacarFlags(): Paises []{
        return this.flags
    }


//LO USAMOS PARA SACAR EL MODAL
    getBanderasPaisesPorPais(pais:string): Observable<Paises>{
        return this.http.get<Paises>(`${this.baseUrl1}${pais}?fields=name,flags,cca3,capital,population,maps`)
    }

    nosSubcribimos2(pais:string){
        this.getBanderasPaisesPorPais(pais)
            .subscribe( data => {
                this.pais = data;
            }) 
    }

    get sacarPais(): Paises {
        return this.pais?? {} as Paises;
    }

//LO USAMOS PARA SACAR EL INPUT

    getBuscarPais(pais: string): Observable<Paises> {
        return this.http.get<Paises>(`${this.baseUrl2}${pais}?fields=name,flags,cca3,capital,population,maps`)
    }
    nosSubcribimos3(pais: string) {
        this.getBuscarPais(pais)
            .subscribe(data => {
                this.pais2 = data;
            })
    }
    get buscarPais(): Paises {
        return this.pais2 ?? {} as Paises;
    }



}