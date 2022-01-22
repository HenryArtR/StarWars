import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Result } from '../../interfaces/listStarships.interface';
import { SwapiService } from '../../services/swapi.service';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  listado: Result[] = [];
  pag: number = 1;
  nombre: string = '';
  apellido: string = '';
  texto: string = '';
  verMas: boolean = false;
  
  
  constructor(private swapiSrv: SwapiService, private router: Router, private route: ActivatedRoute, private srvData: UserDataService){}
  
  saveUrl(url:string){
    let id = url.match(/(\d+)/g)
    this.swapiSrv.saveId(id![0])
    this.router.navigate(['/starships', id![0]])
  }
  mostrarMas(){
    this.pag++
    let pag = this.pag.toString()
    this.swapiSrv.listadoNave(pag).subscribe(list => {
      this.listado = this.listado.concat(list.results)
    })
  }

  ngOnInit() {
    let pag = this.pag.toString()
    this.swapiSrv.listadoNave(pag).subscribe(list => {
      this.listado = list.results
      if(this.listado.length > 0){
        this.verMas = true
      }
    })
    

  }

}
