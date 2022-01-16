import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './starwars/pages/home/home.component';
import { InfoShipsComponent } from './starwars/pages/info-ships/info-ships.component';
import { ListadoComponent } from './starwars/pages/listado/listado.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'listado', component: ListadoComponent
  },
  {
    path: 'starships/:id', component: InfoShipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
