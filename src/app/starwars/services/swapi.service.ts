import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfStarships, Result } from '../interfaces/listStarships.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private urlListado: string = "https://swapi.dev/api/starships/?page=1"
  private urlInfoShip: string = "https://swapi.dev/api/starships"
  private urlImgship: string = "https://starwars-visualguide.com/assets/img/starships"
  private id: string = ''

  constructor( private http: HttpClient) {}

  listadoNave(): Observable<ListOfStarships>{
    return this.http.get<ListOfStarships>(this.urlListado)
  }

  saveId(id: string){
    this.id = id
    console.log(id)
  }

  getInfo(): Observable<Result>{
    let info = `${this.urlInfoShip}/${this.id}`
    return this.http.get<Result>(info)
  }
  getID(): string {
    return this.id
  }

  getImgShip(): string{
    let img = `${this.urlImgship}/${this.id}.jpg`
    return img
  }


}
