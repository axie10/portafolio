import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';
import { RegistroPageComponent } from './pages/registroPage/registroPage.component';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    RegistroPageComponent,
    LoginPageComponent
  ],
  exports: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }