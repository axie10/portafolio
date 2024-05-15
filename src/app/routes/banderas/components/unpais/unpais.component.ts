import { Component, Input, OnInit} from '@angular/core';
import { Paises } from '../../interface/paises.interface';
import { FlagsService } from '../../../../shared/services/banderas.service';


@Component({
  selector: 'app-unpais',
  templateUrl: './unpais.component.html',
  styleUrls: ['./unpais.component.css']
})
export class UnpaisComponent implements OnInit {

  public result2?: Paises;

  @Input()
  public pais?: Paises;


  constructor(
    private servicio: FlagsService
  ) {
  }

  ngOnInit() {
  }

}
