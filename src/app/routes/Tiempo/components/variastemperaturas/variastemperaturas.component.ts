import { Component, OnInit } from '@angular/core';
import { List } from '../../interface/new-interface.interface';
import { TiempoVariosDiasService } from '../../../../shared/services/tiempo_varios_dias.service';

@Component({
  selector: 'app-variastemperaturas',
  templateUrl: './variastemperaturas.component.html',
  styleUrls: ['./variastemperaturas.component.css']
})
export class VariastemperaturasComponent {

  constructor(
    private TiempoVariosdias: TiempoVariosDiasService
  ) { }

  public url: string = 'https://openweathermap.org/img/wn/';
  public url2: string = '2x.png';

  public dia = new Date();

  get result() : List [] | undefined{
    return this.TiempoVariosdias.result
  }

}
