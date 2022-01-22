import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private _nombre: string = '';
  private _apellido: string = '';

  setNombre(nombre: string){
    this._nombre = nombre
    console.log(this._nombre)
  }
  setApellido(apellido: string){
    this._apellido = apellido
  }

  getnombre():string{
    return this._nombre
  }
  getapellido():string{
    return this._apellido
  }

  constructor() { }
}
