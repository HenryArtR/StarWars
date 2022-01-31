import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from '../../interfaces/listStarships.interface';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-info-ships',
  templateUrl: './info-ships.component.html',
  styles: [
  ]
})
export class InfoShipsComponent implements OnInit {

  imgShip: string = ''
  infoShip!: Result;
  id: string = ''
  infoPilots: string[] = []
  

  constructor(private swapiSrv: SwapiService, private route: ActivatedRoute, private router: Router) {}


  
  ngOnInit() {
    this.load()
  }

  getPiloto(num: string){
    let id = num.match(/(\d+)/g)
    this.router.navigate(['pilots', id![0]])
  }

  load(){
    this.id = this.route.snapshot.paramMap.get('id')!
    this.swapiSrv.saveId(this.id)
    this.imgShip = this.swapiSrv.getImgShip()
    this.swapiSrv.getInfo().subscribe(info => this.infoShip = info)
    this.swapiSrv.getInfo().subscribe(info => this.infoPilots = info.pilots)
  }
  

}
