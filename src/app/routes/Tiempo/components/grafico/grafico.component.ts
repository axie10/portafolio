import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { List } from '../../../../shared/interfaces/Tiempo/new-interface.interface';
import { series, temperaturas_grafico } from '../../../../shared/interfaces/Tiempo/temperaturas-grafico';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit, OnChanges {

  constructor() {}
  
  ngOnChanges(): void{
    this.temperatura = this.result();  
  }

  ngOnInit(): void{
    this.temperatura = this.result();
  }

  // EL INPUT QUE NOS VIENE DEL MAINPAGE PARA PASAR LA LISTA DE LOS PROXIMOS DIAS
  @Input({required:true})
  public lista : List [] | undefined;

  //CREAMO UN OBJETO TIPO TEMPERATURASGRAFICO PARA PODER PASARSELO AL GRAFICO
  temperatura : temperaturas_grafico [] = [];

  //OPCIONES DEL GRAFICO
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Temperatura';
  timeline: boolean = true;


  result(): temperaturas_grafico[] {
    // debugger
    let newtemp: temperaturas_grafico[] = [];
    let line: temperaturas_grafico = {
      name: "temperatura_media",
      series: this.gettemperaturas()
    };
    newtemp.push(line);
    return newtemp;
  }


  //MAPEO PARA SACAR DE LA LISTA SOLO EL DIA Y LA TEMPERATURA
  gettemperaturas(): series[] {

    if (this.lista === undefined) {
      return []

    } else {

      return this.lista.map(
        day => {
          return {
            name: new Date(day.dt * 1000).toLocaleDateString(),
            value: day.temp.day
          }

        }
      )
    }
  }

  

}
