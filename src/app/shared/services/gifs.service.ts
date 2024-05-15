import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../../routes/gifs/gifs/interfaces/gifs.interfaces';
import { enviromnets } from '../../../environments/environments';

//con el providedIn: 'root' vamos a decirle a este servicio que va a estar
//disoponible en toda nuestra aplicacion con solo importarlo donde lo
//queramos
@Injectable({providedIn: 'root'})
export class GifsService {

    constructor(private http: HttpClient) { 
        this.leerLocalStorage();
    }

    public giflist: Gif [] = [];
    private tagshistory : string [] = [];
    private serviceUrl: string = 'https://api.giphy.com/v1/gifs';


    get tagsHistory (): string [] {
        return [...this.tagshistory];
    }

    private saveLocalStorage():void{
        // debugger;
        localStorage.setItem('gifs', JSON.stringify(this.tagsHistory));
    }

    private leerLocalStorage():void{
        if(!localStorage.getItem('gifs'))return;

         this.tagshistory = JSON.parse(localStorage.getItem('gifs')!)

         if(this.tagshistory.length === 0 ) return;
         this.searchtag(this.tagshistory[0]);
    }

    private orgizarhistorial (tag:string){

        tag = tag.toLowerCase();

        //lo usamos para filtrar que los inputs que nos vienen no existen en nuestro array
        if(this.tagshistory.includes(tag)){
            this.tagshistory = this.tagsHistory.filter((oldTag) => oldTag !== tag)
        }

        this.tagshistory.unshift( tag );
        this.tagshistory = this.tagshistory.splice(0,10);
        this.saveLocalStorage();

    }


    searchtag(tag: string):void {
        if(tag.length == 0) return;
        this.orgizarhistorial(tag);
        //esto lo usamos para dividir los aprametros y no tener una url tan larga
        const params = new HttpParams()
        .set('api_key', enviromnets.gifs_key)
        .set('limit',10)
        .set('q', tag)

        this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params}).
        subscribe(resp => { 
            this.giflist = resp.data;
        });
    }




    
    
}