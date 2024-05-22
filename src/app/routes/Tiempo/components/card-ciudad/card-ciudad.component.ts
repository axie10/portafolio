import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tiempo } from '../../../../shared/interfaces/Tiempo/tiempo.interface';
import { TiempoPais } from '../../../../shared/interfaces/Tiempo/tiempo-pais-interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { TiempoService } from '../../../../shared/services/tiempo.service';

@Component({
  selector: 'app-card-ciudad',
  templateUrl: './card-ciudad.component.html',
  styleUrls: ['./card-ciudad.component.css']
})
export class CardCiudadComponent {

  constructor(
    private servicioTiempo: TiempoService,
  ) { }

  public pais!: Tiempo;
  public url: string = 'https://openweathermap.org/img/wn/';
  public url2: string = '@2x.png';

  get result() : TiempoPais {
    return this.servicioTiempo.sacarpaises;
  }



}
