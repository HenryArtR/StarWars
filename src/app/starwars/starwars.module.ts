import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { InfoShipsComponent } from './pages/info-ships/info-ships.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListadoComponent,
    InfoShipsComponent,
    HomeComponent
  ],
  exports: [
    ListadoComponent,
    InfoShipsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StarwarsModule { }
