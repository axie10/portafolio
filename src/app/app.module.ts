import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModule } from './auth/auth.module';
import { BanderasModule } from './routes/banderas/banderas.module';
import { ContactoModule } from './routes/contacto/contacto.module';
import { GifssModule } from './routes/gifs/gifss.module';
import { SelectoresMapaModule } from './routes/selectoresMapa/selectores-mapa.module';
import { TiempoModule } from './routes/Tiempo/tiempo.module';
import { SharedModule } from './shared/shared.module';
import { TareasModule } from './routes/tareas/tareas.module';
import { MaterialModule } from './shared/material/material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    TiempoModule,
    TareasModule,
    GifssModule,
    BanderasModule,
    ContactoModule,
    SelectoresMapaModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
