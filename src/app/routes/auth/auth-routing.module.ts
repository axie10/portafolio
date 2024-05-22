import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { RegistroPageComponent } from './pages/registroPage/registroPage.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: '',
        component: LoginPageComponent
      },
      {
        path: 'registro',
        component: RegistroPageComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }