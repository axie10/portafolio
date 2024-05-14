import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { TiempoModule } from './Tiempo/tiempo.module';
import { TareasModule } from './tareas/tareas.module';
import { GifssModule } from './gifs/gifss.module';
import { BanderasModule } from './banderas/banderas.module';
import { ContactoModule } from './contacto/contacto.module';
import { SelectoresMapaModule } from './selectoresMapa/selectores-mapa.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './gifs/shared/shared.module';

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
