import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { InfoShipsComponent } from './pages/info-ships/info-ships.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './pages/signUp/signUp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { PilotsComponent } from './pages/info-ships/pilots/pilots.component';



@NgModule({
  declarations: [
    ListadoComponent,
    InfoShipsComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    PilotsComponent
  ],
  exports: [
    ListadoComponent,
    InfoShipsComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class StarwarsModule { }
