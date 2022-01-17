import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  pag: number = 1
  constructor(private swapiSrv: SwapiService, private router: Router, private route: ActivatedRoute){}
  
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
    })
  }

}
