import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:"",redirectTo:"bienvenido",pathMatch:"full"
  },
  {
    path:"bienvenido",
    component:BienvenidoComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:'error',
    component:ErrorComponent
  },
  {
    path:"**", redirectTo:"error"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
