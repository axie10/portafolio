import { ActivatedRoute } from '@angular/router';
import { Tiempo } from './../../interface/tiempo.interface';
import { Component, OnChanges, OnInit } from '@angular/core';
import { List } from '../../interface/new-interface.interface';
import { TiempoService } from '../../../shared/services/tiempo.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnChanges {

  list: List[] | undefined;
  nombrepais: string[] = ["Madrid", "ES"];
  activatedRoute: any;
  public ciudadBandera?: Tiempo;

  constructor(
    private route: ActivatedRoute,
    private servicio: TiempoService
  ) { }

  ngOnChanges() {
    this.setNombrePais(this.nombrepais);
  }

  ngOnInit() {
    // this.route.params
    // .pipe(
    //   switchMap( ({ciudad}) => this.servicio.getTiempo(ciudad)))
    // .subscribe ( (data: Tiempo) => { // Explicitly type the 'data' parameter as 'Tiempo'
    //   this.ciudadBandera = data;
    //   console.log(this.ciudadBandera);
    // });
  }

  setList(list: List[]) {
    this.list = list;
  }

  setNombrePais(nombrepais: string[]) {
    this.nombrepais = nombrepais;
  }

}
