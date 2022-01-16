import { Component } from '@angular/core';
import { ListOfStarships, Result } from './starwars/interfaces/listStarships.interface';
import { SwapiService } from './starwars/services/swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'S8-StarWars';
  listado: Result[] = []

  constructor(private swapiSrv: SwapiService){}
  mostrarListado(){
    this.swapiSrv.listadoNave().subscribe(list => {
      this.listado = list.results
    })
  }
  
  mostrarInfo(url:string){
    this.swapiSrv.infoNave(url).subscribe(info=>console.log(info))
  }
}
