import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../interfaces/listStarships.interface';
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

  constructor(private swapiSrv: SwapiService, private route: ActivatedRoute) {}


  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.swapiSrv.saveId(this.id)
    this.imgShip = this.swapiSrv.getImgShip()
    this.swapiSrv.getInfo().subscribe(info => this.infoShip = info)
  }
  
  ngOnDestroy() {
    
  }

}
