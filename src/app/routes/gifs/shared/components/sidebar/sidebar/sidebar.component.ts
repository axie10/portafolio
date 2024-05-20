import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../../../../shared/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  
  constructor(private gifsService:GifsService) { }

  get mostrarHistorial():string []{
    return this.gifsService.tagsHistory; 
  }

  buscaTag(tag:string) {
    this.gifsService.searchtag(tag);
  }


  
}
