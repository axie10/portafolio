import { ActivatedRoute } from '@angular/router';
import { Tiempo } from '../../../../shared/interfaces/Tiempo/tiempo.interface';
import { Component, OnChanges, OnInit } from '@angular/core';
import { List } from '../../../../shared/interfaces/Tiempo/new-interface.interface';
import { TiempoService } from '../../../../shared/services/tiempo.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnChanges {

  list: List[] | undefined;
  nombrepais: string[] = ["Madrid", "ES"];

  constructor(
  ) { }

  ngOnChanges() {
    this.setNombrePais(this.nombrepais);
  }

  //ESTE METODO ES PARA PASARLE LA LISTA DE TEMPERATURAS AL GRAFICO
  setList(list: List[]) {
    this.list = list;
  }

  //METODO PARA SACAR LA CIUDAD Y EL PAIS EN LA NAVBAR
  setNombrePais(nombrepais: string[]) {
    this.nombrepais = nombrepais;
  }

}
