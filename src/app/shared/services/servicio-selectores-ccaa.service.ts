import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comunidadesautonomas } from '../../routes/selectoresMapa/interfaces/cccaa.interface';
import { Provincia } from '../../routes/selectoresMapa/interfaces/provincia.interface';
import { Municipio } from '../../routes/selectoresMapa/interfaces/municipio.interface';
import { Tiempopormarcador } from '../../routes/selectoresMapa/interfaces/tiempopormarcador.interface';
import { Todoconmunicipio } from '../../routes/selectoresMapa/interfaces/sacartodoconmunicipio.interface';
// import { Comunidadesautonomas } from '../../selectoresMapa/interfaces/cccaa.interface';
// import { Provincia } from '../../selectoresMapa/interfaces/provincia.interface';
// import { Municipio } from '../../selectoresMapa/interfaces/municipio.interface';
// import { Tiempopormarcador } from '../../selectoresMapa/interfaces/tiempopormarcador.interface';
// import { Todoconmunicipio } from '../../selectoresMapa/interfaces/sacartodoconmunicipio.interface';


@Injectable({providedIn: 'root'})
export class ComunidadesAutonomasService {

    public CCAA?: Comunidadesautonomas[];

    constructor(private httpClient: HttpClient) { }

    // FUNCION PARA HACER LA PETICION A LA API DE TODAS LAS CCAA
    getCCAA(): Observable<Comunidadesautonomas> {

        return this.httpClient.get<Comunidadesautonomas>('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-spain-comunidad-autonoma/records?limit=20&select=acom_name');
    }

    // FUNCION PARA HACER LA PETICION A LA API DE UNA CCAA EN CONCRETO
    getprovincia(code:string): Observable<Provincia> {
        const url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-spain-provincia/records?select=prov_name&where=acom_name='${code}'&limit=100`;

        return this.httpClient.get<Provincia>(url);
    }

    // FUNCION PARA HACER LA PETICION A LA API DE UNA PROVINCIA EN CONCRETO
    getMunicipiosByProvincia(provincia: string): Observable<Municipio> {
        const url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-spain-municipio/records?select=geo_point_2d%2Cmun_name&where=prov_name='${provincia}'&limit=100`;
        return this.httpClient.get<Municipio>(url);
    }

    // FUNCION PARA HACER LA PETICION A LA API DE UN MUNICIPIO EN CONCRETO
    getMunicipios(municipio: string): Observable<Municipio> {
        const url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-spain-municipio/records?select=geo_point_2d%2Cmun_name&where=mun_name='${municipio}'&limit=20`;
        // console.log(url);
        return this.httpClient.get<Municipio>(url);
    }

    //PARA SACAR LA CIUDAD CON LA LONGUITUD Y LA LATITUD
    getTiempopormarcador(lat: number, lon: number): Observable<Tiempopormarcador> {
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=512dd503a3814cf115cf65525a59758b`;

        return this.httpClient.get<Tiempopormarcador>(url);
    }

    //PARA SACAR TODOS LOS DATOS CON EL MUNICIPIO
    getTodoslosDatosdelSelector(value:string): Observable<Todoconmunicipio>{
        const url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-spain-municipio/records?select=geo_point_2d,mun_name,acom_name,prov_name&where=mun_name=%27${value}%27&limit=20`;

        return this.httpClient.get<Todoconmunicipio>(url);
    }







    
}