import { GifsService } from './../../../../gifs/services/gifs.service';
import { Component, OnInit } from '@angular/core';

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
