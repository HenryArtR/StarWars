import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../interfaces/listStarships.interface';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  listado: Result[] = []
  constructor(private swapiSrv: SwapiService, private router: Router){}
  
  saveUrl(url:string){
    let id = url.match(/(\d+)/g)
    this.swapiSrv.saveId(id![0])
    this.router.navigate(['/starships', id![0]])
  }

  ngOnInit() {
    this.swapiSrv.listadoNave().subscribe(list => {
      this.listado = list.results
    })
  }

}
