import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tiempo } from '../../interface/tiempo.interface';
import { TiempoPais } from '../../interface/tiempo-pais-interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { TiempoService } from '../../../../shared/services/tiempo.service';

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

  ngOnInit() {}

  get result() : TiempoPais {
    return this.servicioTiempo.sacarpaises;
  }



}
