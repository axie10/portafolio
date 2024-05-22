import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../../../../shared/services/gifs.service';
import { Gif } from '../../../../../../shared/interfaces/gifs/gifs.interfaces';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomepageComponent {

  constructor(private gifsService: GifsService) { }

  get gifs() : Gif [] {
    return this.gifsService.giflist;
  }

 
}
