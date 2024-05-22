import { Component, OnInit } from '@angular/core';
import { List } from '../../../../shared/interfaces/Tiempo/new-interface.interface';
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

  get result() : List [] | undefined{
    const result = this.TiempoVariosdias.result;
    return result;
  }

}
