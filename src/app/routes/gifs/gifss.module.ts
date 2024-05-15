import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HomepageComponent } from './gifs/pages/home/homepage/home-page.component';
import { GifssRoutingModule } from './gifss-routing.module';
import { GifsModule } from './gifs/gifs.module';


@NgModule({
    imports: [
        GifsModule,
        GifssRoutingModule
    ],
    exports: [
    ],
    declarations: [
    ],
    providers: [],
})
export class GifssModule { }
