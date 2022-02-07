import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckUserGuard } from './shared/guards/check-user.guard';
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
    path: 'listado', component: ListadoComponent,
    canActivate: [CheckUserGuard]
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
