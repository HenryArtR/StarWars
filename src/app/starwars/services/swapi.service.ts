import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfStarships } from '../interfaces/listStarships.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private urlListado: string = "https://swapi.dev/api/starships/?page=1"

  constructor( private http: HttpClient) {}

  listadoNave(): Observable<ListOfStarships>{
    return this.http.get<ListOfStarships>(this.urlListado)
  }

  infoNave(url: string){
    return this.http.get(url)
  }

}
