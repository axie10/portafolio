import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';
import { RegistroPageComponent } from './pages/registroPage/registroPage.component';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { MaterialModule } from '../../shared/module/material/material.module';


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