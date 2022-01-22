import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pilots } from 'src/app/starwars/interfaces/listStarships.interface';
import { SwapiService } from 'src/app/starwars/services/swapi.service';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styles: []
})
export class PilotsComponent implements OnInit {

  pilotos!: Pilots;
  mostrar: boolean = false;

  constructor(private srvSwapi: SwapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let num = this.route.snapshot.paramMap.get('id')
    this.srvSwapi.getPilots(num!).subscribe(pilots => {
      this.pilotos = pilots
      if(this.pilotos = pilots){
        this.mostrar = true
      }
    })
  }

}
