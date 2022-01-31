import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './starwars/pages/home/home.component';
import { InfoShipsComponent } from './starwars/pages/info-ships/info-ships.component';
import { PilotsComponent } from './starwars/pages/info-ships/pilots/pilots.component';
import { ListadoComponent } from './starwars/pages/listado/listado.component';
import { LoginComponent } from './starwars/pages/login/login.component';
import { SignUpComponent } from './starwars/pages/signUp/signUp.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'listado', component: ListadoComponent
  },
  {
    path: 'starships/:id', component: InfoShipsComponent
  },
  {
    path: 'pilots/:id', component: PilotsComponent
  },
  {
    path: 'signUp', component: SignUpComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
