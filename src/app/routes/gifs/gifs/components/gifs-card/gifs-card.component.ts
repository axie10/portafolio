import { Component, Input, OnInit } from '@angular/core';
import { Gif} from '../../../../../shared/interfaces/gifs/gifs.interfaces';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit  {

  @Input()
  public gif!: Gif;

  //es un metodo de angular que se va a ejecutar cuando el 
  //componenete se esta inicializando
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gifs es obligatorio.');
  }

 
}
