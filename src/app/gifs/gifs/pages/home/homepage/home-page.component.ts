import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';
import { Gif } from '../../../interfaces/gifs.interfaces';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomepageComponent {

  constructor(private gifsService: GifsService) { }

  get gifs() : Gif [] {
    return this.gifsService.giflist;
  }

 
}
