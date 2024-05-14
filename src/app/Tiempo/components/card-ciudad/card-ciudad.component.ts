import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tiempo } from '../../interface/tiempo.interface';
import { TiempoService } from '../../service/tiempo.service';
import { TiempoPais } from '../../interface/tiempo-pais-interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-card-ciudad',
  templateUrl: './card-ciudad.component.html',
  styleUrls: ['./card-ciudad.component.css']
})
export class CardCiudadComponent implements OnInit {

  constructor(
    private servicioTiempo: TiempoService,
    private route: ActivatedRoute,
  ) { }


  public pais!: Tiempo;
  public url: string = 'https://openweathermap.org/img/wn/';
  public url2: string = '@2x.png';

  ngOnInit() {

    // console.log(this.result);
    // this.pais = this.servicioTiempo.guardarDatos;
  }

  get result() : TiempoPais {
    const idIcon:string = this.servicioTiempo.sacarpaises.icon;
    const variableIcon: string = `${this.url}${idIcon}${this.url2}`;
    return this.servicioTiempo.sacarpaises;
  }



}
