import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfStarships, Pilots, Result } from '../interfaces/listStarships.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private urlListado: string = "https://swapi.dev/api/starships/?page="
  private urlInfoShip: string = "https://swapi.dev/api/starships"
  private urlPilots: string = 'https://swapi.dev/api/people'
  private urlImgship: string = "https://starwars-visualguide.com/assets/img/starships"
  private id: string = ''
  private number: string = ''

  constructor( private http: HttpClient) {}

  listadoNave(pag?: string): Observable<ListOfStarships>{
    let listado = `${this.urlListado}${pag}`
    return this.http.get<ListOfStarships>(listado)
  }

  getPilots(num: string): Observable<Pilots>{
    let pilotos = `${this.urlPilots}/${num}`
    return this.http.get<Pilots>(pilotos)
  }

  saveId(id: string){
    this.id = id
  }
  saveNum(num: string){
    this.number = num
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
