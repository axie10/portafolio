import { Component, OnInit } from '@angular/core';
import { TiempoPais } from '../../../../shared/interfaces/Tiempo/tiempo-pais-interface';
import { TiempoService } from '../../../../shared/services/tiempo.service';

@Component({
  selector: 'app-card-grande-ciudad',
  templateUrl: './card-grande-ciudad.component.html',
  styleUrls: ['./card-grande-ciudad.component.css']
})
export class CardGrandeCiudadComponent {

  constructor(
    private serviciopais: TiempoService,
  ) { }

  public paisCard?: TiempoPais;
  public dia = new Date();

  get result() : TiempoPais {
    return this.serviciopais.sacarpaises
  }

  //FUNCION PARA SACAR LAS RECOMENDACIONES
  get sugerencia(): string{

    if(this.result.humidity === undefined){return 'No se ha encontrado la ciudad';}

    if(this.result.humidity > 80){

      return "No salgas de casa";

    }else if(this.result.humidity > 60){
        
      return "No olvides el paraguas";

    } else if(this.result.humidity > 40){
        
      return "Día perfecto para salir";

    } else if(this.result.humidity > 20){
        
      return "Día perfecto para salir";

    } else { 
      
      return "Día perfecto para salir";

    }
  }

  


}
