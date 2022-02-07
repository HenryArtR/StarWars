import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Login } from '../interfaces/formulario.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  oculto: boolean = true;
  texto: string = '';
  private _resgistrado$: Subject<boolean> = new Subject()
  private _nombre$: Subject<string> = new Subject();
  private _apellido$: Subject<string> = new Subject();

  constructor( private router: Router) {
  }

  getRegistro$(): Observable<boolean>{
    return this._resgistrado$.asObservable()
  }

  getnombre$():Observable<string>{
    return this._nombre$.asObservable()
  }
  getapellido$():Observable<string>{
    return this._apellido$.asObservable()
  }

  authUsr(usr: Login){
    let userLocal = JSON.parse(localStorage.getItem(usr.usuario)!)
    if(usr.usuario && !userLocal){
      this.texto = 'El usuario no existe'
      this.oculto = false
    }else if (usr.contrasena == userLocal.contrasena) {
      this._nombre$.next(userLocal.nombre)
      this._apellido$.next(userLocal.apellido)
      this._resgistrado$.next(true)
      this.router.navigate(['listado'])
      this.oculto = true
    }else if(usr.contrasena != userLocal.contrasena){
      this.texto = 'La contraseña es incorrecta'
      this.oculto = false  
    } 
  }

  logOut(){
    this._resgistrado$.next(false)
  }


}
