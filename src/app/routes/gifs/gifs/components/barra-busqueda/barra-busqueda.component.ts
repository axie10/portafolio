import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../../../shared/services/gifs.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent {

  @ViewChild ('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifssService: GifsService) {
  }
  
  buscarEtiqueta(): void{

    const newTag = this.tagInput.nativeElement.value;
    this.gifssService.searchtag(newTag);
    this.tagInput.nativeElement.value = '';
  }

  

}


