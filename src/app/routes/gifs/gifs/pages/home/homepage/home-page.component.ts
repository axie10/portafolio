import { Component, OnInit } from '@angular/core';
import { Gif } from '../../../interfaces/gifs.interfaces';
import { GifsService } from '../../../../../../shared/services/gifs.service';


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
