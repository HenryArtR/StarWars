import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pilots, Result } from '../../interfaces/listStarships.interface';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-info-ships',
  templateUrl: './info-ships.component.html',
  styles: [
  ]
})
export class InfoShipsComponent implements OnInit, OnDestroy {

  imgShip: string = ''
  infoShip!: Result;
  id: string = ''
  infoPilots: string[] = []
  pilotos: string[] = []

  constructor(private swapiSrv: SwapiService, private route: ActivatedRoute, private router: Router) {}


  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.swapiSrv.saveId(this.id)
    this.imgShip = this.swapiSrv.getImgShip()
    this.swapiSrv.getInfo().subscribe(info => this.infoShip = info)
    this.swapiSrv.getInfo().subscribe(info => this.infoPilots = info.pilots)
  }

  getPiloto(num: string){
    let id = num.match(/(\d+)/g)
    this.swapiSrv.getPilots(id![0])
    this.router.navigate(['pilots', id![0]])
  }
  
  ngOnDestroy() {
    
  }

}
