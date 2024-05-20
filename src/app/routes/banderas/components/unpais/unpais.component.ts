import { Component, Input, OnInit} from '@angular/core';
import { Paises } from '../../../../shared/interfaces/banderas/paises.interface';
import { FlagsService } from '../../../../shared/services/banderas.service';


@Component({
  selector: 'app-unpais',
  templateUrl: './unpais.component.html',
  styleUrls: ['./unpais.component.css']
})
export class UnpaisComponent {

  //se recibe el pais desde el componente padre
  @Input()
  public pais?: Paises;


  constructor(
    private servicio: FlagsService
  ) {
  }

}
