import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/starwars/interfaces/listStarships.interface';
import { SwapiService } from 'src/app/starwars/services/swapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  

  ngOnInit(): void {
  }

}
